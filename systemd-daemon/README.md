**systemd Service File Template**

Edit and copy this file into systemd directory (usually under /usr/lib/systemd/system):
```
$ sudo cp backend-api.service /usr/lib/systemd/system/backend-api.service

$ sudo systemctl daemon-reload

$ sudo systemctl start backend-api.service
```

Now you can check the status via command:
```
$ sudo systemctl status backend-api.service
```

If everything is running well, you can set it to be persistent across reboot via command:
```
$ sudo systemctl stop backend-api.service

$ sudo systemctl enable backend-api.service

$ sudo systemctl start backend-api.service
```

-- Enjoy --
