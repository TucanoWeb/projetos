from fastapi import APIRouter
from typing import List
from src.services.DataList.data_list_service import DataListService
from src.models.schemas.data_list_schema import DataListItem, DataListItemComplete
from src.models.schemas.find_one_schema import FindOneDataList


class RoutesDataList():

    router = APIRouter()

    # Retorna apenas name e email devido ao fato de termos utilizado o schema, que está no DataListItem, para encaminhar apenas os dados que julgamos necessários.
    @router.get("/list/schema", response_model=List[DataListItem])
    async def get_list_schema():
        return DataListService.find_all_with_schema()

    @router.get("/list/", response_model=List[DataListItemComplete])
    async def get_list():
        return DataListService.find_all()

    @router.get("/list/one/{id}", response_model=List[FindOneDataList])
    async def get_one(id: int):
        return DataListService.find_one(id)
