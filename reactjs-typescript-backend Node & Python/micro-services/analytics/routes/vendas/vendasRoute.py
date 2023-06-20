from resources.vendas.TopPessoasQnt import ListTop10PessoasQty
from resources.vendas.productsTopUseResource import ProductsTopUse
from resources.vendas.productsTopGender import ProductsTopGender
from resources.vendas.tailPessoasQty import ListTail10PessoasQty
from resources.vendas.topPessoasBuy import ListTop10PessoasBuy


class RoutesVendas():

    def init(api):
        api.add_resource(ListTop10PessoasQty, '/clientes/top/qty')
        api.add_resource(ListTail10PessoasQty, '/clientes/tail/qty')
        api.add_resource(ListTop10PessoasBuy, '/clientes/top/spent')
        api.add_resource(ProductsTopUse, '/produtos/top/sell')
        api.add_resource(ProductsTopGender, '/produtos/top/gender')
