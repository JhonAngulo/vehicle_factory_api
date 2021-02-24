'use strict'

const tableVehicle = `
DROP TABLE IF EXISTS public.vehicle;
CREATE TABLE public.vehicle
(
  id serial primary key not null,
  mark VARCHAR(60) not null,
  manufacturing_time VARCHAR(60) not null
);
`

const tableOrder = `
DROP TABLE IF EXISTS public.order;
CREATE TABLE public.order
(
  id serial primary key not null,
  client VARCHAR(60) not null,
  "order" VARCHAR(60) not null,
  date DATE not null
);
`

module.exports = [
  tableVehicle,
  tableOrder
]
