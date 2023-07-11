from fastapi import FastAPI
from src.routes.DataList.DataListRoute import RoutesDataList


# Inicia o fastAPI
app = FastAPI()


# Rotas
app.include_router(RoutesDataList.router)
