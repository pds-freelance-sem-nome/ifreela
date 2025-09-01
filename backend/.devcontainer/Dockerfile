FROM maven:3.9.9-eclipse-temurin-21

WORKDIR /workspace

COPY api/pom.xml .

RUN mvn dependency:go-offline

COPY api/ ./api

WORKDIR /workspace/api

EXPOSE 8080

CMD ["mvn", "spring-boot:run"]


