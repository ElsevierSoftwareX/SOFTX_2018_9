WITH bboxLatLong AS (
  SELECT TileBBox({{zoom}},{{x}}, {{y}}, 4326) as {{geom}}
),
tileExtent as (
  SELECT
  {{attributes}},
  CASE WHEN {{zoom}} > 10 THEN layer.{{geom}}
       ELSE ST_simplify(layer.{{geom}},(50/(512*(({{zoom}}+1)^2))))
      END geom
  FROM
  {{layer}} layer,
  bboxLatLong bbox
  WHERE
  bbox.{{geom}} && layer.{{geom}} AND
  ST_Intersects(
    bbox.{{geom}},
    layer.{{geom}}
  )
)

SELECT {{attributes}}, 
ST_AsGeoJSON({{geom}}) geom 
FROM tileExtent

