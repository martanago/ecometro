SELECT the_geom, municipio as municipality, nombre AS name, direccion AS address FROM landfills WHERE ST_Intersects(the_geom,(SELECT the_geom FROM spain))