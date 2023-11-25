docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otdel-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t otdel-java/app ../../..
