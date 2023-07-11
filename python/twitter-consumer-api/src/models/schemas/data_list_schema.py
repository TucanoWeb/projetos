from pydantic import BaseModel


class DataListItem(BaseModel):
    id: int
    name: str
    email: str


class DataListItemComplete(BaseModel):
    id: int
    name: str
    last_name: str
    email: str
