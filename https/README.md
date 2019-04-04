**Command to convert DOS to UNIX**
If you encounter an error stating:
```
/bin/bash^M: bad interpreter: No such file or directory
```
Run command:
```
$ sed -i -e 's/\r$//' generate_key.sh
```
