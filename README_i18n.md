# Projeto Tranquila Noites Mãe - Internacionalizado

Este projeto foi modificado para suportar múltiplos idiomas usando a biblioteca `react-i18next` e um sistema de arquivos JSON para as traduções.

## Modificações Realizadas

1.  **Internacionalização (i18n):**
    *   Instalada e configurada a biblioteca `react-i18next`.
    *   Todos os textos visíveis nos componentes principais foram extraídos para um arquivo JSON base (`public/locales/pt/translation.json`).
    *   Os componentes React foram refatorados para carregar textos dinamicamente usando o hook `useTranslation`.
    *   Componentes duplicados por idioma (ex: `IndexFr.tsx`, `Ger.tsx`) foram removidos, pois agora existe uma única versão dos componentes que se adapta ao idioma selecionado.
2.  **Seletor de Idioma:**
    *   Adicionado um componente `LanguageSwitcher` (um botão flutuante no canto inferior direito) que permite ao usuário selecionar o idioma desejado (Português, Inglês, Francês, Alemão, Italiano).
    *   A troca de idioma é dinâmica e não requer recarregamento da página.
3.  **Script de Automação de Traduções:**
    *   Criado um script Python (`scripts/generate_translations.py`) para facilitar a adição de novos idiomas.
    *   O script copia a estrutura do arquivo JSON do idioma base (Português por padrão) para os novos idiomas de destino, criando os diretórios e arquivos necessários.
    *   Os arquivos gerados contêm os textos do idioma base, prontos para serem traduzidos manualmente.

## Como Usar

1.  **Executar o Projeto:**
    *   Navegue até o diretório raiz do projeto (`tranquila-noites-mae-main`).
    *   Instale as dependências: `npm install`
    *   Inicie o servidor de desenvolvimento: `npm run dev`
2.  **Trocar Idioma:**
    *   Clique no ícone de globo no canto inferior direito da página.
    *   Selecione o idioma desejado no menu suspenso.
3.  **Adicionar Novos Idiomas ou Editar Traduções:**
    *   **Manualmente:** Edite os arquivos JSON existentes em `public/locales/<codigo_idioma>/translation.json` (ex: `public/locales/en/translation.json`).
    *   **Usando o Script:**
        *   Abra um terminal no diretório raiz do projeto.
        *   Execute o script para gerar arquivos para novos idiomas. Exemplo para adicionar Espanhol (es) e Japonês (ja):
            ```bash
            python3 scripts/generate_translations.py es ja
            ```
        *   O script usará o Português (`pt`) como base por padrão. Para usar outro idioma base, use a flag `--base`. Exemplo usando Inglês (`en`) como base:
            ```bash
            python3 scripts/generate_translations.py --base en es ja
            ```
        *   Após a execução, os novos arquivos JSON (ex: `public/locales/es/translation.json`) serão criados com os textos do idioma base. Edite esses arquivos para adicionar as traduções corretas.
        *   **Importante:** Após adicionar um novo idioma e seu arquivo de tradução, você precisará atualizar a configuração do `i18next` no arquivo `src/i18n.ts`, adicionando o novo código de idioma ao array `supportedLngs` para que ele apareça no seletor.

## Estrutura de Arquivos Relevante

*   `public/locales/`: Contém os diretórios de cada idioma suportado.
    *   `pt/translation.json`: Arquivo de tradução para Português (base).
    *   `en/translation.json`: Arquivo de tradução para Inglês (gerado pelo script, precisa ser traduzido).
    *   `fr/translation.json`: Arquivo de tradução para Francês (gerado pelo script, precisa ser traduzido).
    *   `de/translation.json`: Arquivo de tradução para Alemão (gerado pelo script, precisa ser traduzido).
    *   `it/translation.json`: Arquivo de tradução para Italiano (gerado pelo script, precisa ser traduzido).
*   `src/i18n.ts`: Arquivo de configuração do `react-i18next`.
*   `src/components/LanguageSwitcher.tsx`: Componente do seletor de idioma.
*   `src/components/`: Contém os componentes refatorados que usam `useTranslation`.
*   `scripts/generate_translations.py`: Script para gerar novos arquivos de tradução.

Esperamos que estas modificações facilitem a manutenção e expansão do projeto para novos mercados!
