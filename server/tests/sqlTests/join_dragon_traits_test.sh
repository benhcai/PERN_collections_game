#!/bin/zsh
echo "Running sql tests"

# chmod u+x ./test.sh

psql -U node_user -d dragonstackdb -c "
  SELECT * FROM dragons
  INNER JOIN dragon_traits
  ON dragons.dragon_id=dragon_traits.dragon_id
  INNER JOIN traits
  ON dragon_traits.trait_id=traits.trait_id
  ORDER BY 
            dragon_traits.dragon_id ASC,
            traits.trait_type ASC
  ;
"
