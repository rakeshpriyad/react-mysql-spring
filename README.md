# react-mysql-spring


docker build -t rkp/spring-boot-react-user-service:1 .

docker run -d --name user-service -e MYSQL_ROOT_PASSWORD=secret123 -e MYSQL_DATABASE=user-service -e MYSQL_USER=dbuser -e MYSQL_PASSWORD=secret mysql:latest

*Run application linking to demo-mysql container:*

docker run -d --name spring-boot-react-user-service -e "SPRING_PROFILES_ACTIVE=docker" --link user-service:mysql -p 8080:8080 rkp/spring-boot-react-user-service:1



got to mysql command prompt in docker using following command:
docer exec -it <mysql container-name> bash -l
docker exec -it user-service bash -l


Login to mysql using:
mysql -u root -p

then enter root password
secret123

use user-service
select * from user;


http://localhost:30000/



docker build -f dockerfiles/Dockerfile.debug -t myapp_debug .
docker build -f dockerfiles/Dockerfile.prod  -t myapp_prod .



Use docker attach to attach your terminal’s standard input, output, and error (or any combination of the three) to a running container using the container’s ID or name. This allows you to view its ongoing output or to control it interactively, as though the commands were running directly in your terminal.

docker run -d --name topdemo ubuntu /usr/bin/top -b

$ docker attach topdemo


