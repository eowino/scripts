#!/bin/bash

MESSAGE="️Please provide 2 args. 1st arg is the current file extension. 2nd arg is what you want to change to. Use the --dry flag to do a dry run"
TARGET="Please provide the target extension"
count=0

if [[ $# -eq 0 ]]; then
    echo $'\n⚠️ ' $MESSAGE
    exit 111
fi

if [[ -z "$2" ]]; then
    echo $'\n⚠️ ' $TARGET
    exit 111
fi

for file in *.$1; do
    if [[ "$file" ]]; then
    # FIXME: ALWAYS GOES IN HERE AT LEAST ONCE IF $1 and $2 provided
        if [[ $* == *--dry* ]]; then
            echo "From: $file" "To: $(basename "$file" .$1).$2"
        else
            mv "$file" "$(basename "$file" .$1).$2"
        fi
        count=$((count + 1))    
    fi
done

if [[ $* == *--dry* ]]; then
    echo $'\n🏁  ' $count $'file(s) will be renamed.\n'
else
    echo $'\n🏁  Renamed' $count $'file(s).\n'
fi