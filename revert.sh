#!/bin/bash

read -p "enter symbols you want to revert: " inputText

revertedText=$(echo "$inputText" | rev)

echo "Reverted text: $revertedText"