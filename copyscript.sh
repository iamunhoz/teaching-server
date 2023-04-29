#!/bin/bash
folder_name="dist"

if [ ! -d "$folder_name" ]; then
  mkdir "$folder_name"
else
  echo "Folder $folder_name already exists"
fi

cp scripts.js dist/scripts.js