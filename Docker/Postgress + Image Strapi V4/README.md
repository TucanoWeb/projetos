[![Linkedin](https://img.shields.io/static/v1.svg?logo=linkedin&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=Linkedin&message=Public)](https://www.linkedin.com/in/eric-ricielle-2aa1ba237/) [![Elestio examples](https://img.shields.io/static/v1.svg?logo=github&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=github&message=open%20source)](https://github.com/TucanoWeb) [![Whatsapp](https://img.shields.io/static/v1.svg?logo=whatsapp&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=Whatsapp&message=Tirar%20Dúvidas)](https://api.whatsapp.com/send?phone=5531992936042)

# Strapi V4, verified and packaged by TucanoWeb

[Strapi](https://github.com/strapi/strapi-docker) is an open-source, fully customizable, and extensible JavaScript-based headless CMS.

![strapi](https://github.com/elestio-examples/strapi/raw/main/strapi.png)

Deploy a **fully managed Strapi** on this image if you want to create JavaScript APIs that are quick and easy to manage in just 2 minutes



# Get Starter



## Create network

For containers to communicate internally, we will create a network using the command below

```bash
docker network create NETWORK-NAME
```



## Create database container

After the network is created, we will download the postgres (official) database (use another one if you wish)

```bash
docker pull postgres
```



Now, let's create a database container, using the image we downloaded and using the network created

```bash
docker run -tid --name CONTAINER-NAME --network NETWORK-NAME -p 5401:5432 -e POSTGRES_USER=USER-NAME -e POSTGRES_PASSWORD=PASSWORD postgres
```

In the command above, the username in POSTGRES_USER will be the same name assigned to the first database created, which will be done automatically when running the command. In ports, 5401 we define the service that will receive the external request and 5432 the internal port used by the service in the container.

***Important:*** Write down your Username and Password in a safe place.



## Get internal ip from container

So that we can configure the environment variables in strapi, we need to obtain the internal IP assigned to the database container by the network that was created previously

```bash
docker network inspect NETWORK-NAME
```

You will see something like this

```yaml
 {
        "Name": "NETWORK-NAME",
        "Id": "a7a7d434897793e2e264ac1799e9a2798c20d28275e067424ef1cef20b63f960",
        "Created": "2023-10-07T05:01:24.165335281+02:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers":
            "11b2b98a1dea48919a4ee4072b4bae60c8f3e970244a8973de90b267c476cc55": {
                "Name": "CONTAINER-NAME",
                "EndpointID": "fb57186c492f9f65095c55993e5748afdcd207861da79cd28853836387360f8a",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]

```

Therefore, the database container private ip is **172.18.0.2**



## Create strapi container

Let's download the strapi image

```bash
docker pull tucanoweb/strapiv4-model:4.0
```



Now, let's create the container with the strapi image that we downloaded

```bash
docker run -tid --name CONTAINER-NAME --network NETWORK-NAME -p 1301:1337 strapiv4-model:4.0
```

Strapi's default port is 1337. We define the container's service port as 1301, with the first two digits being a personal reference for the respective service. Set this port as desired.



## Configure environment variables

Let's access the container and define the environment variables. To do this, we need the container id

```bash
docker ps
```



You will see something like this

```powershell
 {CONTAINER ID   IMAGE                          COMMAND                  CREATED        STATUS        PORTS                                       NAMES
043d3db8d7c6   tucanoweb/strapiv4-model:4.0   "/bin/bash"              12 hours ago   Up 11 hours   0.0.0.0:1301->1337/tcp, :::1301->1337/tcp   strapi-base
11b2b98a1dea   postgres                       "docker-entrypoint.s…"   12 hours ago   Up 12 hours   0.0.0.0:5401->5432/tcp, :::5401->5432/tcp   postgresDB


```

Therefore, the id of the strapi container, which we will access, is **043d3db8d7c6**



Now, let's access the container

```bash
docker exec -ti ID_CONTAINER bash
```



Inside the container, we will navigate to the directory where we will configure the environment variables

```bash
cd ~
```

```bash
cd strapi-model/
```

```bash
nano .env
```



You will see something like this:

```js
HOST=0.0.0.0
PORT=1337
APP_KEYS=If6/kgihFbEvTJyxOTbCbw==,w4eyHnVCT26VTdZql+LxLQ==,BkGT4lge4VXsWlNL0dna8A==,4/S50sgpbrgFuHwioyYZsw==
API_TOKEN_SALT=kgMLPBvtXD48WBKmLpvG7Q==
ADMIN_JWT_SECRET=N75hWm82Ov+bGyKBFARKqg==
TRANSFER_TOKEN_SALT=/lhN7hzVk6JRDHDpib7N4Q==
# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=172.18.0.2
DATABASE_PORT=5432
DATABASE_NAME=DATABASE-NAME
DATABASE_USERNAME=DATABASE-USER
DATABASE_PASSWORD=DATABASE-PASS
DATABASE_SSL=false
JWT_SECRET=GTkzuoZqZndJiatUoJB8jA==

```

In this file, you only need to change the environment variables listed below:

- DATABASE_HOST:  Enter the private IP of the database container. If you haven't noted it, go back above, in the "Get internal ip from container" instruction block"
- DATABASE_PORT: Here is the default port that you defined for the postgres service in the container. If you followed the example above, the port will be 5432
- DATABASE_NAME: The database name, by default, is the same name you defined for the user when creating the database container.
- DATABASE_USERNAME: Enter the user name you defined when creating the database container.
- DATABASE_PASSWORD: Enter the access password you defined when creating the database container.



After making changes, save the file by pressing Ctrl+O and Enter. Then, to exit the editor, press Ctrl+X



Now, let's build the project to see if everything is ok.

```bash
npm run build
```



If everything goes well, in the end you will see something like this

```powershell
> strapi-model@0.1.0 build
> strapi build

Building your admin UI with development configuration...

✔ Webpack
  Compiled successfully in 14.83s


```



Now, let's run the project

```bash
npm run develop
```
