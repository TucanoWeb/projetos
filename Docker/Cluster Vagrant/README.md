# Docker-compose com Wordpress + MySQL + Phpmyadmin



- Instalar Docker (Ubuntu):

```
curl -fsSL https://get.docker.com -o get-docker.sh
```

```
sh get-docker.sh
```



- Instalar docker-compose (Ubuntu):

```
apt-get install docker-compose
```



- Criar armazenamento (método bind). Foi criado o diretório abaixo apenas por questão de organização (uploads.ini):

```
mkdir /data
```

```
mkdir /data/php
```

```
mkdir /data/php/admin
```

```
cd /data/php/admin
```



- Criar arquivo uploads.ini (configurações de recursos php):

```
nano uploads.ini
```



- Dentro do arquivo, copiar conforme necessidade, adequando os recursos abaixo:

```
file_uploads = On
memory_limit = 500M
upload_max_filesize = 500M
post_max_size = 500M
max_execution_time = 600
max_file_uploads = 50000
max_execution_time = 5000
max_input_time = 5000
```



- Por questão de organização, crie um diretório para conter o arquivo docker-compose:

```
cd /
```

```
mkdir /compose
```

```
mkdir /compose/wordpress-apache
```

```
cd /compose/wordpress-apache
```



- Crie o arquivo docker-compose.yml e cole o conteúdo do arquivo "docker-compose.yml" que está disponível nesse diretório  do git:

```
nano docker-compose.yml
```

​	_**Copie o conteúdo disponível no arquivo "docker-compose.yml, que está disponível nesse diretório"**_



- Suba os containers (necessário estar no mesmo diretório do respectivo docker-compose.yml):

```
docker-compose up -d
```
