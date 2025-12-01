/**
 * Constantes con datos reales de departamentos, provincias y distritos del Perú
 */

export interface District {
  id: string;
  name: string;
}

export interface Province {
  id: string;
  name: string;
  districts: District[];
}

export interface Department {
  id: string;
  name: string;
  provinces: Province[];
}

/**
 * Datos de departamentos del Perú con sus provincias y distritos
 * Incluye los principales departamentos con algunas de sus provincias y distritos más importantes
 */
export const PERU_DEPARTMENTS: Department[] = [
  {
    id: 'd1a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Lima',
    provinces: [
      {
        id: 'p1a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Lima',
        districts: [
          { id: 'di1a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lima' },
          { id: 'di2a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Miraflores' },
          { id: 'di3a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'San Isidro' },
          { id: 'di4a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Barranco' },
          { id: 'di5a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Surco' },
          { id: 'di6a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Molina' },
          { id: 'di7a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chorrillos' },
          { id: 'di8a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pueblo Libre' },
          { id: 'di9a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Jesús María' },
          { id: 'di10a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Magdalena' },
        ],
      },
      {
        id: 'p2a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Cajatambo',
        districts: [
          { id: 'di11a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cajatambo' },
          { id: 'di12a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Copa' },
          { id: 'di13a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Gorgor' },
          { id: 'di14a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huancapón' },
          { id: 'di15a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Manas' },
        ],
      },
      {
        id: 'p3a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Canta',
        districts: [
          { id: 'di16a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Canta' },
          { id: 'di17a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Arahuay' },
          { id: 'di18a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huamantanga' },
          { id: 'di19a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huaros' },
          { id: 'di20a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lachaqui' },
        ],
      },
      {
        id: 'p4a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Cañete',
        districts: [
          {
            id: 'di21a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Vicente de Cañete',
          },
          { id: 'di22a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Asia' },
          { id: 'di23a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Calango' },
          { id: 'di24a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cerro Azul' },
          { id: 'di25a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chilca' },
        ],
      },
      {
        id: 'p5a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Huaral',
        districts: [
          { id: 'di26a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huaral' },
          {
            id: 'di27a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Atavillos Alto',
          },
          {
            id: 'di28a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Atavillos Bajo',
          },
          { id: 'di29a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Aucallama' },
          { id: 'di30a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chancay' },
        ],
      },
      {
        id: 'p6a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Huarochirí',
        districts: [
          { id: 'di31a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Matucana' },
          { id: 'di32a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Antioquia' },
          { id: 'di33a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Callahuanca' },
          { id: 'di34a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Carampoma' },
          { id: 'di35a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chicla' },
        ],
      },
      {
        id: 'p7a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Huaura',
        districts: [
          { id: 'di36a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huacho' },
          { id: 'di37a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ámbar' },
          {
            id: 'di38a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Caleta de Carquín',
          },
          { id: 'di39a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Checras' },
          { id: 'di40a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Hualmay' },
        ],
      },
      {
        id: 'p8a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Oyón',
        districts: [
          { id: 'di41a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Oyón' },
          { id: 'di42a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Andajes' },
          { id: 'di43a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Caujul' },
          { id: 'di44a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cochamarca' },
          { id: 'di45a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Navan' },
        ],
      },
      {
        id: 'p9a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Yauyos',
        districts: [
          { id: 'di46a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Yauyos' },
          { id: 'di47a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Alis' },
          { id: 'di48a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Allauca' },
          { id: 'di49a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ayaviri' },
          { id: 'di50a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Azángaro' },
        ],
      },
    ],
  },
  {
    id: 'd2a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Arequipa',
    provinces: [
      {
        id: 'p10a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Arequipa',
        districts: [
          { id: 'di51a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Arequipa' },
          { id: 'di52a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cayma' },
          {
            id: 'di53a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Cerro Colorado',
          },
          { id: 'di54a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Yanahuara' },
          { id: 'di55a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Sachaca' },
          {
            id: 'di56a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Alto Selva Alegre',
          },
          { id: 'di57a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Characato' },
          {
            id: 'di58a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Jacobo Hunter',
          },
        ],
      },
      {
        id: 'p11a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Camaná',
        districts: [
          { id: 'di59a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Camaná' },
          {
            id: 'di60a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'José María Quimper',
          },
          {
            id: 'di61a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Mariano Nicolás Valcárcel',
          },
          { id: 'di62a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ocoña' },
          { id: 'di63a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Quilca' },
        ],
      },
      {
        id: 'p12a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Caravelí',
        districts: [
          { id: 'di64a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Caravelí' },
          { id: 'di65a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Acarí' },
          { id: 'di66a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Atico' },
          { id: 'di67a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Atiquipa' },
          { id: 'di68a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bella Unión' },
        ],
      },
      {
        id: 'p13a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Castilla',
        districts: [
          { id: 'di69a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Aplao' },
          { id: 'di70a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Andagua' },
          { id: 'di71a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ayo' },
          { id: 'di72a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chachas' },
          {
            id: 'di73a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Chilcaymarca',
          },
        ],
      },
      {
        id: 'p14a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Caylloma',
        districts: [
          { id: 'di74a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chivay' },
          { id: 'di75a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Achoma' },
          { id: 'di76a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cabanaconde' },
          { id: 'di77a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Callalli' },
          { id: 'di78a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Caylloma' },
        ],
      },
      {
        id: 'p15a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Condesuyos',
        districts: [
          { id: 'di79a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chuquibamba' },
          { id: 'di80a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Andaray' },
          { id: 'di81a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cayarani' },
          { id: 'di82a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chichas' },
          { id: 'di83a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Iray' },
        ],
      },
      {
        id: 'p16a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Islay',
        districts: [
          { id: 'di84a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Mollendo' },
          { id: 'di85a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cocachacra' },
          {
            id: 'di86a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Dean Valdivia',
          },
          { id: 'di87a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Islay' },
          { id: 'di88a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Mejía' },
        ],
      },
      {
        id: 'p17a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'La Unión',
        districts: [
          { id: 'di89a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cotahuasi' },
          { id: 'di90a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Alca' },
          { id: 'di91a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Charcana' },
          { id: 'di92a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huaynacotas' },
          { id: 'di93a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pampamarca' },
        ],
      },
    ],
  },
  {
    id: 'd3a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Cusco',
    provinces: [
      {
        id: 'p18a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Cusco',
        districts: [
          { id: 'di94a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cusco' },
          {
            id: 'di95a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Jerónimo',
          },
          {
            id: 'di96a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Sebastián',
          },
          { id: 'di97a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Santiago' },
          { id: 'di98a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Wanchaq' },
          { id: 'di99a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Saylla' },
          { id: 'di100a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Poroy' },
          { id: 'di101a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'San Blas' },
        ],
      },
      {
        id: 'p19a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Urubamba',
        districts: [
          { id: 'di102a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Urubamba' },
          { id: 'di103a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chinchero' },
          {
            id: 'di104a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Ollantaytambo',
          },
          {
            id: 'di105a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Huayllabamba',
          },
          {
            id: 'di106a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Machupicchu',
          },
        ],
      },
      {
        id: 'p20a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Calca',
        districts: [
          { id: 'di107a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Calca' },
          { id: 'di108a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Coya' },
          { id: 'di109a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lamay' },
          { id: 'di110a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lares' },
          { id: 'di111a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pisac' },
        ],
      },
      {
        id: 'p21a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Anta',
        districts: [
          { id: 'di112a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Anta' },
          { id: 'di113a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ancahuasi' },
          { id: 'di114a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cachimayo' },
          {
            id: 'di115a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Chinchaypujio',
          },
          { id: 'di116a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huarocondo' },
        ],
      },
      {
        id: 'p22a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Canas',
        districts: [
          { id: 'di117a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Yanaoca' },
          { id: 'di118a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Checca' },
          {
            id: 'di119a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Kunturkanki',
          },
          { id: 'di120a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Langui' },
          { id: 'di121a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Layo' },
        ],
      },
      {
        id: 'p23a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Canchis',
        districts: [
          { id: 'di122a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Sicuani' },
          { id: 'di123a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Checacupe' },
          { id: 'di124a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Combapata' },
          { id: 'di125a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Marangani' },
          { id: 'di126a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pitumarca' },
        ],
      },
      {
        id: 'p24a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chumbivilcas',
        districts: [
          {
            id: 'di127a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Santo Tomás',
          },
          { id: 'di128a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Capacmarca' },
          { id: 'di129a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chamaca' },
          {
            id: 'di130a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Colquemarca',
          },
          { id: 'di131a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Livitaca' },
        ],
      },
      {
        id: 'p25a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Espinar',
        districts: [
          { id: 'di132a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Espinar' },
          { id: 'di133a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Condoroma' },
          { id: 'di134a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Coporaque' },
          { id: 'di135a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ocoruro' },
          { id: 'di136a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pallpata' },
        ],
      },
      {
        id: 'p26a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'La Convención',
        districts: [
          {
            id: 'di137a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Quillabamba',
          },
          { id: 'di138a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Echarate' },
          { id: 'di139a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huayopata' },
          { id: 'di140a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Maranura' },
          { id: 'di141a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ocobamba' },
        ],
      },
    ],
  },
  {
    id: 'd4a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'La Libertad',
    provinces: [
      {
        id: 'p27a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Trujillo',
        districts: [
          { id: 'di142a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Trujillo' },
          {
            id: 'di143a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'El Porvenir',
          },
          {
            id: 'di144a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Florencia de Mora',
          },
          { id: 'di145a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huanchaco' },
          {
            id: 'di146a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'La Esperanza',
          },
          { id: 'di147a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Laredo' },
          { id: 'di148a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Moche' },
          { id: 'di149a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Salaverry' },
        ],
      },
      {
        id: 'p28a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chepén',
        districts: [
          { id: 'di150a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chepén' },
          { id: 'di151a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pacanga' },
          {
            id: 'di152a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Pueblo Nuevo',
          },
        ],
      },
      {
        id: 'p29a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Pacasmayo',
        districts: [
          { id: 'di153a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pacasmayo' },
          { id: 'di154a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Guadalupe' },
          {
            id: 'di155a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Jequetepeque',
          },
          { id: 'di156a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'San José' },
          {
            id: 'di157a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Pedro de Lloc',
          },
        ],
      },
      {
        id: 'p30a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Ascope',
        districts: [
          { id: 'di158a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ascope' },
          { id: 'di159a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chicama' },
          { id: 'di160a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chocope' },
          {
            id: 'di161a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Magdalena de Cao',
          },
          { id: 'di162a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Paiján' },
        ],
      },
      {
        id: 'p31a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Bolívar',
        districts: [
          { id: 'di163a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bolívar' },
          { id: 'di164a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bambamarca' },
          {
            id: 'di165a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Condormarca',
          },
          { id: 'di166a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Longotea' },
          { id: 'di167a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Uchumarca' },
        ],
      },
      {
        id: 'p32a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Gran Chimú',
        districts: [
          { id: 'di168a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cascas' },
          { id: 'di169a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lucma' },
          { id: 'di170a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Marmot' },
          { id: 'di171a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Sayapullo' },
        ],
      },
      {
        id: 'p33a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Julcán',
        districts: [
          { id: 'di172a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Julcán' },
          { id: 'di173a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Calamarca' },
          { id: 'di174a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Carabamba' },
          { id: 'di175a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huaso' },
        ],
      },
      {
        id: 'p34a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Otuzco',
        districts: [
          { id: 'di176a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Otuzco' },
          { id: 'di177a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Agallpampa' },
          { id: 'di178a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Charat' },
          { id: 'di179a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huaranchal' },
          { id: 'di180a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Cuesta' },
        ],
      },
      {
        id: 'p35a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Pataz',
        districts: [
          { id: 'di181a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Tayabamba' },
          { id: 'di182a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Buldibuyo' },
          { id: 'di183a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chillia' },
          {
            id: 'di184a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Huancaspata',
          },
          { id: 'di185a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huaylillas' },
        ],
      },
      {
        id: 'p36a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Sánchez Carrión',
        districts: [
          { id: 'di186a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huamachuco' },
          { id: 'di187a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chugay' },
          { id: 'di188a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cochorco' },
          { id: 'di189a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Curgos' },
          { id: 'di190a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Marcabal' },
        ],
      },
      {
        id: 'p37a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Santiago de Chuco',
        districts: [
          {
            id: 'di191a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Santiago de Chuco',
          },
          { id: 'di192a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Angasmarca' },
          { id: 'di193a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cachicadán' },
          { id: 'di194a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Mollebamba' },
          { id: 'di195a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Mollepata' },
        ],
      },
    ],
  },
  {
    id: 'd5a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Piura',
    provinces: [
      {
        id: 'p38a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Piura',
        districts: [
          { id: 'di196a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Piura' },
          { id: 'di197a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Castilla' },
          { id: 'di198a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Catacaos' },
          { id: 'di199a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Arena' },
          { id: 'di200a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Unión' },
          { id: 'di201a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Las Lomas' },
          {
            id: 'di202a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Tambo Grande',
          },
        ],
      },
      {
        id: 'p39a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Sullana',
        districts: [
          { id: 'di203a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Sullana' },
          { id: 'di204a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bellavista' },
          {
            id: 'di205a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Ignacio Escudero',
          },
          { id: 'di206a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lancones' },
          {
            id: 'di207a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Marcavelica',
          },
        ],
      },
      {
        id: 'p40a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Talara',
        districts: [
          { id: 'di208a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Talara' },
          { id: 'di209a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'El Alto' },
          { id: 'di210a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lobitos' },
          {
            id: 'di211a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Los Órganos',
          },
          { id: 'di212a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Máncora' },
        ],
      },
      {
        id: 'p41a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Paita',
        districts: [
          { id: 'di213a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Paita' },
          { id: 'di214a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Amotape' },
          { id: 'di215a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Arenal' },
          { id: 'di216a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Colán' },
          { id: 'di217a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Huaca' },
        ],
      },
      {
        id: 'p42a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Sechura',
        districts: [
          { id: 'di218a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Sechura' },
          {
            id: 'di219a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Bellavista de la Unión',
          },
          { id: 'di220a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bernal' },
          {
            id: 'di221a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Cristo Nos Valga',
          },
          { id: 'di222a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Vice' },
        ],
      },
      {
        id: 'p43a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Ayabaca',
        districts: [
          { id: 'di223a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ayabaca' },
          { id: 'di224a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Frías' },
          { id: 'di225a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Jililí' },
          { id: 'di226a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lagunas' },
          { id: 'di227a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Montero' },
        ],
      },
      {
        id: 'p44a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Huancabamba',
        districts: [
          {
            id: 'di228a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Huancabamba',
          },
          { id: 'di229a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Canchaque' },
          {
            id: 'di230a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'El Carmen de la Frontera',
          },
          { id: 'di231a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huarmaca' },
          { id: 'di232a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lalaquiz' },
        ],
      },
      {
        id: 'p45a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Morropón',
        districts: [
          { id: 'di233a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chulucanas' },
          {
            id: 'di234a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Buenos Aires',
          },
          { id: 'di235a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chalaco' },
          { id: 'di236a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Matanza' },
          { id: 'di237a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Morropón' },
        ],
      },
    ],
  },
  {
    id: 'd6a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Lambayeque',
    provinces: [
      {
        id: 'p46a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chiclayo',
        districts: [
          { id: 'di238a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chiclayo' },
          { id: 'di239a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chongoyape' },
          { id: 'di240a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Eten' },
          {
            id: 'di241a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'José Leonardo Ortiz',
          },
          {
            id: 'di242a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'La Victoria',
          },
          { id: 'di243a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lagunas' },
          { id: 'di244a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Monsefú' },
          {
            id: 'di245a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Nueva Arica',
          },
        ],
      },
      {
        id: 'p47a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Ferreñafe',
        districts: [
          { id: 'di246a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ferreñafe' },
          { id: 'di247a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cañaris' },
          { id: 'di248a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Incahuasi' },
          {
            id: 'di249a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Manuel Antonio Mesones Muro',
          },
          { id: 'di250a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pítipo' },
        ],
      },
      {
        id: 'p48a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Lambayeque',
        districts: [
          { id: 'di251a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Lambayeque' },
          { id: 'di252a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chochope' },
          { id: 'di253a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Illimo' },
          { id: 'di254a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Jayanca' },
          { id: 'di255a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Mochumí' },
        ],
      },
      {
        id: 'p49a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chongoyape',
        districts: [
          { id: 'di256a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chongoyape' },
          { id: 'di257a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Oyotún' },
        ],
      },
      {
        id: 'p50a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Eten',
        districts: [
          { id: 'di258a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Eten' },
          {
            id: 'di259a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Eten Puerto',
          },
        ],
      },
      {
        id: 'p51a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Mórrope',
        districts: [
          { id: 'di260a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Mórrope' },
          { id: 'di261a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pacora' },
        ],
      },
      {
        id: 'p52a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Motupe',
        districts: [
          { id: 'di262a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Motupe' },
          { id: 'di263a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Olmos' },
        ],
      },
      {
        id: 'p53a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Picsi',
        districts: [
          { id: 'di264a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Picsi' },
          { id: 'di265a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pátapo' },
        ],
      },
    ],
  },
  {
    id: 'd7a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Callao',
    provinces: [
      {
        id: 'p19a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Callao',
        districts: [
          { id: 'di70a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Callao' },
          { id: 'di71a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bellavista' },
          {
            id: 'di72a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Carmen de La Legua',
          },
          { id: 'di73a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Perla' },
          { id: 'di74a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Punta' },
          { id: 'di75a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ventanilla' },
        ],
      },
    ],
  },
  {
    id: 'd8a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Ica',
    provinces: [
      {
        id: 'p54a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Ica',
        districts: [
          { id: 'di266a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ica' },
          {
            id: 'di267a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'La Tinguiña',
          },
          {
            id: 'di268a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Los Aquijes',
          },
          { id: 'di269a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ocucaje' },
          { id: 'di270a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pachacutec' },
          { id: 'di271a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Parcona' },
          {
            id: 'di272a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Pueblo Nuevo',
          },
          { id: 'di273a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Salas' },
        ],
      },
      {
        id: 'p55a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chincha',
        districts: [
          {
            id: 'di274a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Chincha Alta',
          },
          {
            id: 'di275a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Chincha Baja',
          },
          { id: 'di276a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'El Carmen' },
          {
            id: 'di277a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Grocio Prado',
          },
          {
            id: 'di278a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Pueblo Nuevo',
          },
        ],
      },
      {
        id: 'p56a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Pisco',
        districts: [
          { id: 'di279a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pisco' },
          { id: 'di280a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huancano' },
          {
            id: 'di281a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Independencia',
          },
          { id: 'di282a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Paracas' },
          { id: 'di283a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'San Andrés' },
        ],
      },
      {
        id: 'p57a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Nazca',
        districts: [
          { id: 'di284a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Nazca' },
          { id: 'di285a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Changuillo' },
          { id: 'di286a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'El Ingenio' },
          { id: 'di287a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Marcona' },
          {
            id: 'di288a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Vista Alegre',
          },
        ],
      },
      {
        id: 'p58a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Palpa',
        districts: [
          { id: 'di289a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Palpa' },
          { id: 'di290a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Llipata' },
          { id: 'di291a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Río Grande' },
          { id: 'di292a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Santa Cruz' },
          { id: 'di293a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Tibillo' },
        ],
      },
      {
        id: 'p59a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Pisco',
        districts: [
          {
            id: 'di294a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Clemente',
          },
          {
            id: 'di295a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Juan Bautista',
          },
        ],
      },
      {
        id: 'p60a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Tambo',
        districts: [
          { id: 'di296a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Tambo' },
          {
            id: 'di297a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Juan de Yanac',
          },
        ],
      },
      {
        id: 'p61a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Yauca del Rosario',
        districts: [
          {
            id: 'di298a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Yauca del Rosario',
          },
          { id: 'di299a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Tate' },
        ],
      },
    ],
  },
  {
    id: 'd9a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Junín',
    provinces: [
      {
        id: 'p62a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Huancayo',
        districts: [
          { id: 'di300a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huancayo' },
          { id: 'di301a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chilca' },
          {
            id: 'di302a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Chongos Alto',
          },
          { id: 'di303a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'El Tambo' },
          { id: 'di304a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huancán' },
          { id: 'di305a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Hualhuas' },
          { id: 'di306a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huayucachi' },
          { id: 'di307a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ingenio' },
        ],
      },
      {
        id: 'p63a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Concepción',
        districts: [
          { id: 'di308a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Concepción' },
          { id: 'di309a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Aco' },
          { id: 'di310a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Andamarca' },
          { id: 'di311a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chambara' },
          { id: 'di312a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cochas' },
        ],
      },
      {
        id: 'p64a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Jauja',
        districts: [
          { id: 'di313a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Jauja' },
          { id: 'di314a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Acolla' },
          { id: 'di315a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Apata' },
          { id: 'di316a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ataura' },
          { id: 'di317a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Canchayllo' },
        ],
      },
      {
        id: 'p65a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chanchamayo',
        districts: [
          { id: 'di318a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Merced' },
          {
            id: 'di319a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Chanchamayo',
          },
          { id: 'di320a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Perené' },
          { id: 'di321a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Pichanaki' },
          {
            id: 'di322a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Luis de Shuaro',
          },
        ],
      },
      {
        id: 'p66a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Tarma',
        districts: [
          { id: 'di323a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Tarma' },
          { id: 'di324a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Acobamba' },
          { id: 'di325a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huaricolca' },
          { id: 'di326a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huasahuasi' },
          { id: 'di327a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Unión' },
        ],
      },
      {
        id: 'p67a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Yauli',
        districts: [
          { id: 'di328a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Oroya' },
          { id: 'di329a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chacapalpa' },
          { id: 'di330a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huay-Huay' },
          {
            id: 'di331a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Marcapomacocha',
          },
          { id: 'di332a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Morococha' },
        ],
      },
      {
        id: 'p68a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Satipo',
        districts: [
          { id: 'di333a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Satipo' },
          { id: 'di334a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Coviriali' },
          { id: 'di335a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Llaylla' },
          { id: 'di336a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Mazamari' },
          {
            id: 'di337a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Pampa Hermosa',
          },
        ],
      },
      {
        id: 'p69a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chupaca',
        districts: [
          { id: 'di338a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chupaca' },
          { id: 'di339a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ahuac' },
          {
            id: 'di340a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Chongos Bajo',
          },
          { id: 'di341a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huachac' },
          {
            id: 'di342a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Huamancaca Chico',
          },
        ],
      },
    ],
  },
  {
    id: 'd10a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    name: 'Cajamarca',
    provinces: [
      {
        id: 'p70a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Cajamarca',
        districts: [
          { id: 'di343a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cajamarca' },
          { id: 'di344a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Asunción' },
          { id: 'di345a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cospán' },
          { id: 'di346a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Encañada' },
          { id: 'di347a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Jesús' },
          { id: 'di348a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Llacanora' },
          {
            id: 'di349a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Los Baños del Inca',
          },
          { id: 'di350a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Magdalena' },
        ],
      },
      {
        id: 'p71a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Chota',
        districts: [
          { id: 'di351a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chota' },
          { id: 'di352a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Anguía' },
          { id: 'di353a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chalamarca' },
          { id: 'di354a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chiguirip' },
          { id: 'di355a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chimban' },
        ],
      },
      {
        id: 'p72a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Jaén',
        districts: [
          { id: 'di356a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Jaén' },
          { id: 'di357a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bellavista' },
          { id: 'di358a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chontalí' },
          { id: 'di359a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Colasay' },
          { id: 'di360a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huabal' },
        ],
      },
      {
        id: 'p73a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Celendín',
        districts: [
          { id: 'di361a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Celendín' },
          { id: 'di362a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chumuch' },
          { id: 'di363a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cortegana' },
          { id: 'di364a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huasmin' },
          {
            id: 'di365a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Jorge Chávez',
          },
        ],
      },
      {
        id: 'p74a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Contumazá',
        districts: [
          { id: 'di366a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Contumazá' },
          { id: 'di367a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chilete' },
          { id: 'di368a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Guzmango' },
          { id: 'di369a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'San Benito' },
          {
            id: 'di370a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Santa Cruz de Toledo',
          },
        ],
      },
      {
        id: 'p75a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Cutervo',
        districts: [
          { id: 'di371a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cutervo' },
          { id: 'di372a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Callayuc' },
          { id: 'di373a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Choros' },
          { id: 'di374a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Cujillo' },
          { id: 'di375a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Ramada' },
        ],
      },
      {
        id: 'p76a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'Hualgayoc',
        districts: [
          { id: 'di376a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Bambamarca' },
          { id: 'di377a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chugur' },
          { id: 'di378a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Hualgayoc' },
        ],
      },
      {
        id: 'p77a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'San Ignacio',
        districts: [
          {
            id: 'di379a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'San Ignacio',
          },
          { id: 'di380a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chirinos' },
          { id: 'di381a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Huarango' },
          { id: 'di382a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'La Coipa' },
          { id: 'di383a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Namballe' },
        ],
      },
      {
        id: 'p78a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
        name: 'San Marcos',
        districts: [
          { id: 'di384a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'San Marcos' },
          { id: 'di385a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Chancay' },
          {
            id: 'di386a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Eduardo Villanueva',
          },
          {
            id: 'di387a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
            name: 'Gregorio Pita',
          },
          { id: 'di388a2b3c4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Ichocan' },
        ],
      },
    ],
  },
];
