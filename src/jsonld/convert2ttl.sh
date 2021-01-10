#!/bin/bash

# Display the commands as we run them.
set -o xtrace

# Clear existing Turtle conversions.
rm *.ttl

# Convert to Turtle.
CONVERTER="rdfpipe -i json-ld -o ttl"

for filename in *.json
do
  $CONVERTER $filename > ${filename%.json}.ttl
done
