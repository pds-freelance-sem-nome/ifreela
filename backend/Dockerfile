FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

COPY api/.mvn/ .mvn
COPY api/mvnw api/pom.xml ./
RUN ./mvnw dependency:go-offline

COPY api/src ./src

RUN ./mvnw package -DskipTests

EXPOSE 8000
CMD ["java", "-jar", "target/api-0.0.1-SNAPSHOT.jar"]
