from setuptools import setup, find_packages

with open("README.md", "r") as f:
    page_description = f.read()
    
with open("requirements.txt") as f:
    requirements = f.read().splitlines()

setup(
    name="calc_processing",
    version="0.0.2",
    author="TucanoWeb",
    author_email="suporte@tucanoweb.com.br",
    description="Mult Table and array sum",
    long_description=page_description,
    long_description_content_type="text/markdown",
    url="https://github.com/TucanoWeb/projetos/tree/master/python/calc-package",
    packages=find_packages(),
    install_requires=requirements,
    python_requires='>=3.8',
)