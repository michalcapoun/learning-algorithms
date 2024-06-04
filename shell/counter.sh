#!/bin/bash

read -p "give me starting number to count from: " startNumber

if ! [[ $startNumber =~ ^[0-9]+$ ]]; then
	echo "Error: not a number"
	exit 1
fi

counter=$startNumber
while [ $counter -gt 0 ]; do
	echo $counter
	((counter--))
done