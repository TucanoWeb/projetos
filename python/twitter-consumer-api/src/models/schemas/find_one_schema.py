from pydantic import BaseModel


class FindOneDataList(BaseModel):
    id: int | None
    name: str | None
    last_name: str | None
    email: str | None

