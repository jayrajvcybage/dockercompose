FROM microsoft/dotnet:2.2-aspnetcore-runtime-alpine AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk-alpine AS build
WORKDIR /src
COPY ["HelloApi/HelloApi.csproj", "HelloApi/"]
RUN dotnet restore "HelloApi/HelloApi.csproj"
COPY . .
WORKDIR "/src/HelloApi"
RUN dotnet build "HelloApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "HelloApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app

COPY --from=publish /app .
ENTRYPOINT ["dotnet", "HelloApi.dll"]