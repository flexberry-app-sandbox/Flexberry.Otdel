docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otdel/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t otdel/app ../..
