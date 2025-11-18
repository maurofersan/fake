# Documentación de Servicios Redis y Onboarding

Este documento explica cómo consumir los servicios de Redis, OTP y Captcha para el flujo de onboarding de apertura de cuenta.

## Tabla de Contenidos

1. [Servicios Redis](#servicios-redis)
2. [Servicios OTP](#servicios-otp)
3. [Servicio Captcha](#servicio-captcha)
4. [Flujo Completo de Onboarding](#flujo-completo-de-onboarding)
5. [Constantes de Pantallas](#constantes-de-pantallas)

---

## Servicios Redis

### 1. POST `/redis/create`

Guarda o actualiza los datos del usuario durante el proceso de onboarding. Este endpoint permite guardar datos progresivamente a medida que el usuario avanza por las diferentes pantallas.

**Propósito**: Persistir datos del usuario con trazabilidad de pantalla (`idScreen`) y tiempo de permanencia (`minutsScreen`).

**Request Body** (todos los campos son opcionales, excepto `documentType` y `documentNumber` en la primera llamada):

```json
{
  "idScreen": "ID_PANTALLA_DATOS",
  "minutsScreen": 5,
  "documentType": "0ed651ca-908b-4f83-9626-d6b4740d97e7",
  "documentNumber": "70223123",
  "phoneNumber": "921719043",
  "email": "npascor@gmail.com",
  "acceptedPrivacyPolicy": "S"
  // ... otros campos según la pantalla
}
```

**Response** (201 Created):

```json
{
  "success": true,
  "status": 201,
  "message": "Datos obtenidos con éxito",
  "data": {
    "idScreen": "ID_PANTALLA_DATOS",
    "minutsScreen": 5,
    "idTransaction": "a6f6bf5c-1d45-4446-a770-8059bd6750e4",
    "documentType": "0ed651ca-908b-4f83-9626-d6b4740d97e7",
    "documentNumber": "70223123",
    "phoneNumber": "921719043",
    "email": "npascor@gmail.com",
    "acceptedPrivacyPolicy": "S"
    // ... otros campos guardados (los no enviados vendrán en null)
  }
}
```

**Campos disponibles**:

- `idScreen`: Identificador de la pantalla actual
- `minutsScreen`: Minutos que el usuario permaneció en la pantalla
- `documentType`: Tipo de documento (UUID)
- `documentNumber`: Número de documento
- `phoneNumber`: Número de teléfono
- `email`: Correo electrónico
- `fullName`: Nombre completo
- `lastName`: Apellido paterno
- `motherLastName`: Apellido materno
- `firstName`: Primer nombre
- `birthDate`: Fecha de nacimiento (formato: "YYYY/MM/DD")
- `civilStatus`: Estado civil (UUID)
- `gender`: Género (UUID)
- `streetType`: Tipo de calle
- `streetName`: Nombre de la calle
- `houseNumber`: Número de casa
- `department`: Departamento (UUID)
- `district`: Distrito (UUID)
- `province`: Provincia (UUID)
- `isPeruvian`: Si es peruano ("S" o "N")
- `acceptedPrivacyPolicy`: Aceptación de política de privacidad ("S" o "N")
- `acceptedTermsAndConditions`: Aceptación de términos y condiciones ("S" o "N")
- `acceptedreadContract`: Aceptación de lectura de contrato ("S" o "N")
- `productId`: ID del producto (UUID)
- `productName`: Nombre del producto
- `accountTypeId`: ID del tipo de cuenta (UUID)
- `accountTypeName`: Nombre del tipo de cuenta
- `currency`: Moneda (UUID)
- `statusValOtp`: Estado de validación OTP ("S" o "N")
- `statusValZtrus`: Estado de validación Zytrust ("S" o "N")
- `pathImageDocumentFront`: Ruta de imagen del documento (frente)
- `pathImageDocumentReverse`: Ruta de imagen del documento (reverso)
- `pathImagePersonSelfie`: Ruta de imagen de selfie

**Notas importantes**:

- El endpoint genera automáticamente un `idTransaction` único en la primera llamada
- Los datos se fusionan con datos existentes si ya existe un registro con el mismo `documentType` y `documentNumber`
- Los campos no enviados se mantienen con sus valores anteriores o se establecen en `null` si es la primera vez

---

### 2. GET `/redis/:documentType/:documentNumber`

Recupera todos los datos guardados de un usuario por su tipo y número de documento.

**Propósito**: Recuperar el estado del onboarding cuando el usuario recarga la página o vuelve a entrar.

**Ejemplo de Request**:

```
GET /redis/0ed651ca-908b-4f83-9626-d6b4740d97e7/70223123
```

**Response** (200 OK):

```json
{
  "success": true,
  "status": 200,
  "message": "Datos obtenidos con éxito",
  "data": {
    "idScreen": "ID_PANTALLA_DATOS",
    "minutsScreen": 5,
    "idTransaction": "a6f6bf5c-1d45-4446-a770-8059bd6750e4",
    "fullName": "Nicker Pasco Rodriguez",
    "lastName": "Pasco",
    "motherLastName": "Rodriguez",
    "firstName": "Nicker",
    "birthDate": "1995-06-12"
    // ... todos los campos guardados
  }
}
```

**Response** (404 Not Found) si no existe:

```json
{
  "success": false,
  "status": 404,
  "message": "Datos no encontrados",
  "data": null
}
```

**Uso recomendado**:

- Llamar este endpoint al cargar la aplicación para verificar si hay datos guardados
- Usar el campo `idScreen` del response para redirigir al usuario a la pantalla donde se quedó
- Prellenar los formularios con los datos del response

---

## Servicios OTP

### 1. POST `/otp/generate`

Genera un código OTP de 6 dígitos para verificación por SMS o Email.

**Request Body**:

```json
{
  "device": "mobile",
  "phone": "921719043"
}
```

O para email:

```json
{
  "device": "web",
  "email": "npascor@gmail.com"
}
```

**Response** (200 OK):

```json
{
  "success": true,
  "status": 200,
  "message": "OTP generado correctamente",
  "data": "123456"
}
```

**Notas**:

- El OTP expira en 5 minutos
- En producción, el código se enviaría por SMS/Email y no se retornaría en el response
- El código es de un solo uso

---

### 2. POST `/otp/verify`

Verifica si el código OTP ingresado por el usuario es válido.

**Request Body**:

```json
{
  "device": "mobile",
  "phone": "921719043",
  "code": "123456"
}
```

O para email:

```json
{
  "device": "web",
  "email": "npascor@gmail.com",
  "code": "123456"
}
```

**Response** (200 OK) si es válido:

```json
{
  "success": true,
  "status": 200,
  "message": "OTP válido",
  "data": "OTP verificado correctamente"
}
```

**Response** (401 Unauthorized) si es inválido o expirado:

```json
{
  "success": false,
  "status": 401,
  "message": "OTP inválido o expirado",
  "data": null
}
```

---

## Servicio Captcha

### GET `/captcha/validate?token=TOKEN`

Valida un token de captcha.

**Query Parameters**:

- `token` (requerido): Token del captcha generado por el frontend

**Ejemplo de Request**:

```
GET /captcha/validate?token=abc123xyz
```

**Response** (200 OK):

```json
{
  "success": true,
  "status": 200,
  "message": "Captcha validado correctamente",
  "data": {
    "success": true,
    "score": 0.9,
    "action": "submit"
  }
}
```

**Response** (400 Bad Request) si el token es inválido:

```json
{
  "success": false,
  "status": 400,
  "message": "Captcha inválido",
  "data": null
}
```

**Notas**:

- En producción, este endpoint validaría el token con un servicio externo (ej: Google reCAPTCHA)
- El `score` va de 0.0 (bot) a 1.0 (humano)

---

## Flujo Completo de Onboarding

### Pantalla 1: Datos Básicos (Onboarding)

**1. Al cargar la pantalla, verificar si hay datos guardados:**

```http
GET /redis/{documentType}/{documentNumber}
```

**2. Si hay datos, prellenar formulario y redirigir según `idScreen`**

**3. Usuario completa datos básicos y envía:**

```http
POST /redis/create
Content-Type: application/json

{
  "idScreen": "ID_PANTALLA_DATOS",
  "minutsScreen": 5,
  "documentType": "0ed651ca-908b-4f83-9626-d6b4740d97e7",
  "documentNumber": "70223123",
  "phoneNumber": "921719043",
  "email": "npascor@gmail.com",
  "acceptedPrivacyPolicy": "S"
}
```

**4. Guardar `idTransaction` del response para uso posterior**

---

### Pantalla 2: Selección de Cuenta

**1. Usuario selecciona tipo de cuenta y envía:**

```http
POST /redis/create
Content-Type: application/json

{
  "idScreen": "ID_PANTALLA_SELECCION_CUENTA",
  "minutsScreen": 3,
  "documentType": "0ed651ca-908b-4f83-9626-d6b4740d97e7",
  "documentNumber": "70223123",
  "isPeruvian": "S",
  "productId": "91ba39fa-754a-471e-8606-bcdc064496dd",
  "productName": "Apertura de Cuenta",
  "accountTypeId": "6141dbe5-1662-4553-a8a0-aafcb658fbbf",
  "accountTypeName": "Cuenta Imparable",
  "currency": "b0006e00-8d7d-4395-af9f-a965eefe1b4b"
}
```

**2. Generar OTP:**

```http
POST /otp/generate
Content-Type: application/json

{
  "device": "mobile",
  "phone": "921719043"
}
```

**3. Usuario ingresa código OTP y verifica:**

```http
POST /otp/verify
Content-Type: application/json

{
  "device": "mobile",
  "phone": "921719043",
  "code": "123456"
}
```

**4. Si OTP es válido, actualizar estado:**

```http
POST /redis/create
Content-Type: application/json

{
  "idScreen": "ID_PANTALLA_OTP_SMS",
  "minutsScreen": 2,
  "documentType": "0ed651ca-908b-4f83-9626-d6b4740d97e7",
  "documentNumber": "70223123",
  "statusValOtp": "S"
}
```

---

### Pantalla 3: Datos Personales Completos

**1. Usuario completa datos personales y envía:**

```http
POST /redis/create
Content-Type: application/json

{
  "idScreen": "ID_PANTALLA_DATOS",
  "minutsScreen": 8,
  "documentType": "0ed651ca-908b-4f83-9626-d6b4740d97e7",
  "documentNumber": "70223123",
  "fullName": "Nicker Pasco Rodriguez",
  "lastName": "Pasco",
  "motherLastName": "Rodriguez",
  "firstName": "Nicker",
  "birthDate": "1999/07/15",
  "civilStatus": "ec411e3b-4840-405b-ad45-0cf718774128",
  "gender": "b036766c-d90a-4b1a-89c9-067d284afcba",
  "streetType": "Avenida",
  "streetName": "Los Pinos",
  "houseNumber": "123",
  "department": "e41c34cd-0249-49d6-b1f9-cb688c358251",
  "district": "d857bb87-9839-42a6-8a56-96541c802296",
  "province": "4b668c2a-5b01-4f02-b6a8-92559d2b0a10",
  "acceptedreadContract": "S",
  "acceptedTermsAndConditions": "S",
  "statusValZtrus": "S",
  "pathImageDocumentFront": "c/dd/imagen.png",
  "pathImageDocumentReverse": "c/dd/imagen.png",
  "pathImagePersonSelfie": "c/dd/imagen.png"
}
```

---

### Manejo de Recarga de Página

**Al recargar o volver a entrar:**

1. **Llamar al endpoint de recuperación:**

```http
GET /redis/{documentType}/{documentNumber}
```

2. **Verificar el `idScreen` del response:**
   - Si `idScreen` es `"ID_PANTALLA_DATOS"` → Redirigir a pantalla de datos básicos
   - Si `idScreen` es `"ID_PANTALLA_SELECCION_CUENTA"` → Redirigir a selección de cuenta
   - Si `idScreen` es `"ID_PANTALLA_OTP_SMS"` → Redirigir a verificación OTP SMS
   - etc.

3. **Prellenar formularios con los datos del response**

4. **Continuar desde donde se quedó el usuario**

---

## Constantes de Pantallas

Las constantes de `idScreen` están definidas en `src/mock/constants/screen-ids.constants.ts`:

```typescript
export const SCREEN_IDS = {
  ONBOARDING: 'ID_PANTALLA_DATOS',
  SELECT_ACCOUNT: 'ID_PANTALLA_SELECCION_CUENTA',
  OTP_SMS: 'ID_PANTALLA_OTP_SMS',
  OTP_MAIL: 'ID_PANTALLA_OTP_MAIL',
  OCR: 'ID_PANTALLA_OCR',
  SELFIE: 'ID_PANTALLA_SELFIE',
  ACCOUNT_SUMMARY: 'ID_PANTALLA_RESUMEN_CUENTA',
  ACCOUNT_ACTIVATED: 'ID_PANTALLA_CUENTA_ACTIVADA',
};
```

**Nota**: Actualiza estos valores cuando tengas los IDs reales de las pantallas del frontend.

---

## Trazabilidad

Este sistema permite trazabilidad completa del proceso de onboarding:

- **`idScreen`**: Identifica en qué pantalla está el usuario
- **`minutsScreen`**: Tiempo que el usuario permaneció en cada pantalla
- **`idTransaction`**: Identificador único de la transacción de onboarding
- **Persistencia**: Los datos se guardan progresivamente, permitiendo recuperar el estado en cualquier momento

En un backend real, estos datos se utilizarían para:

- Análisis de abandono de formularios
- Optimización de UX
- Auditoría y cumplimiento
- Soporte al cliente (ver dónde se quedó un usuario)

---

## Ejemplos de Código

### JavaScript/TypeScript (Fetch API)

```typescript
// Guardar datos de pantalla
async function saveScreenData(data: RedAccountRedisInputDTO) {
  const response = await fetch('http://localhost:3000/redis/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

// Recuperar datos guardados
async function getSavedData(documentType: string, documentNumber: string) {
  const response = await fetch(
    `http://localhost:3000/redis/${documentType}/${documentNumber}`,
  );
  return await response.json();
}

// Generar OTP
async function generateOTP(phone: string) {
  const response = await fetch('http://localhost:3000/otp/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, device: 'mobile' }),
  });
  return await response.json();
}

// Verificar OTP
async function verifyOTP(phone: string, code: string) {
  const response = await fetch('http://localhost:3000/otp/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, code, device: 'mobile' }),
  });
  return await response.json();
}
```

---

## Notas Finales

- Todos los endpoints retornan respuestas en formato `ApiResponse<T>` con `success`, `status`, `message` y `data`
- Los campos opcionales permiten guardar datos progresivamente
- El sistema fusiona datos nuevos con existentes automáticamente
- Los datos se persisten en memoria (en producción usar Redis real)
- El `idTransaction` se genera automáticamente y es único por sesión de onboarding
