---
layout: page
title: Guides
permalink: /guides/
---
This page contains a number of short guides for working remotely with the files and applications you have accessible at CYD.


## Accessing IDA and Lysator from CYD

CYD-poolens' computers has the Application ThinLinc installed. ThinLinc is required in order to access the IDA systems from a remote location. This enables CYD-poolen users to work remotely with IDA or Lysator systems. 

Guides for using ThinLinc on:

 - [IDA](https://www.ida.liu.se/~TDDC76/UPP_Course_Mtrl/tools/thinlinc/index.sv.shtml)
 - [Lysator](https://datorhandbok.lysator.liu.se/index.php/Fritz)


## Login from home

If you are using Linux, BSD and OSX:

    $ ssh -X <liu-id>@ssh.cyd.liu.se

If you are using Windows you will have to download a ssh client such as [KiTTY](http://www.9bis.net/kitty/) or [MobaXterm](http://mobaxterm.mobatek.net/).


## Access your files from home

#### Linux and BSD
If you have a file manager such as Nautilus or Thunar installed (which you normally do), open it and simply press Ctrl-L and enter:

    ssh://<liu-id>@ssh.cyd.liu.se:/cyd/home/<liu-id>

You can then add a bookmark by dragging the folder named <liu-id> in the top bar to the sidebar on the left for easy access.

You can also mount the remote folder using sshfs:

    $ mkdir CYD-remote
    $ sshfs <liu-id>@ssh.cyd.liu.se:/cyd/home/<liu-id> CYD-remote

#### Windows

On windows you will have to download a program that support the scp protocol, we recommend [WinSCP](http://winscp.net/eng/index.php)


#### OSX

On OS X you will need sshfs installed. The easiest way to install sshfs is to install [Homebrew](http://http://brew.sh/) first. Then do:

	$ brew install sshfs

After that you can do:

	$ mkdir CYD-remote
	$ sshfs <liu-id>@ssh.cyd.liu.se: CYD-remote



## Fingerprints

Fingerprints are used to verify that you're actually connecting to the desired host and not someone else. These are CYD-poolens fingerprints.

Fingerprints for ssh.cyd.liu.se:

    b0:14:0f:6f:3a:f8:93:ea:95:63:9d:06:50:54:cc:d8 (DSA)
    51:29:9e:10:59:19:6f:dd:7e:97:28:6c:4f:a7:70:d2 (RSA)
    f8:69:30:2e:66:6b:19:90:7c:be:a6:88:bb:60:d2:f7 (ECDSA)


Fingerprints for web.cyd.liu.se (only for organizations with websites):

    e6:b9:ab:f1:2d:b2:50:cb:16:6e:05:eb:02:33:e4:7b (DSA)
    ae:a9:9f:f3:7a:dc:6e:3b:59:7e:88:8e:46:0a:ec:9e (RSA)
    1b:10:c6:23:9b:3e:30:76:66:c8:9a:38:a2:70:ee:53 (ECDSA)

Fingerprints for org.cyd.liu.se (only for organizations with file shares):

    40:88:0b:be:5b:53:a6:b5:00:15:2a:3e:c4:d6:f5:39 (DSA)
    20:71:0d:84:4d:dd:f7:e4:f1:63:46:36:77:be:5a:02 (RSA)
    cf:08:0b:82:4b:b5:60:0e:a3:4a:c8:05:82:d1:81:3e (ECDSA)

Fingerprints for raket.cyd.liu.se (only for organizations with launch codes):

    7e:de:1a:95:99:4f:e6:b9:c7:80:ea:e4:63:99:b8:1b  (DSA)
    9d:14:88:f6:0f:a2:57:20:f7:83:2f:2e:b2:a0:32:ac  (RSA)
	df:e8:3c:c4:b7:62:af:b8:5d:ae:60:2d:60:59:c3:8b  (ECDSA)
