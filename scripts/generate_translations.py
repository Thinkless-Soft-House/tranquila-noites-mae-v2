#!/usr/bin/env python3
import json
import os
import argparse
from pathlib import Path

# Define o diretório base do projeto relativo ao script
PROJECT_ROOT = Path(__file__).parent.parent
LOCALES_DIR = PROJECT_ROOT / "public" / "locales"

def copy_and_prepare_translation(base_lang, target_lang):
    """Copia a estrutura do JSON base e prepara para tradução."""
    base_file = LOCALES_DIR / base_lang / "translation.json"
    target_dir = LOCALES_DIR / target_lang
    target_file = target_dir / "translation.json"

    if not base_file.exists():
        # Corrigido: f-string de linha única com aspas corretas
        print(f"Erro: Arquivo de tradução base '{base_file}' não encontrado.")
        return

    try:
        # Cria o diretório de destino se não existir
        target_dir.mkdir(parents=True, exist_ok=True)

        # Lê o arquivo JSON base
        with open(base_file, 'r', encoding='utf-8') as f:
            base_data = json.load(f)

        # Prepara os dados para o novo idioma (inicialmente copia os textos originais)
        # Uma abordagem mais avançada poderia usar uma API de tradução aqui.
        # Por enquanto, apenas copiamos a estrutura e os textos para tradução manual.
        target_data = base_data # Simplesmente copia por enquanto

        # Escreve o novo arquivo JSON
        with open(target_file, 'w', encoding='utf-8') as f:
            json.dump(target_data, f, ensure_ascii=False, indent=2)

        # Corrigido: f-strings de linha única com aspas corretas
        print(f"Arquivo de tradução para '{target_lang}' criado em '{target_file}'.")
        print(f"Por favor, edite este arquivo para adicionar as traduções corretas.")

    except Exception as e:
        # Corrigido: f-string de linha única com aspas corretas e sem parêntese extra
        print(f"Ocorreu um erro ao processar o idioma '{target_lang}': {e}")

def main():
    parser = argparse.ArgumentParser(
        description="Gera arquivos de tradução para novos idiomas a partir de um idioma base."
    )
    parser.add_argument(
        "--base",
        default="pt",
        help="Código do idioma base (ex: pt)"
    )
    parser.add_argument(
        "targets",
        nargs='+',
        help="Códigos dos idiomas de destino (ex: en fr de it)"
    )

    args = parser.parse_args()

    # Corrigido: f-strings de linha única com aspas corretas
    print(f"Usando '{args.base}' como idioma base.")
    print(f"Gerando arquivos para os idiomas: {', '.join(args.targets)}.")

    for lang in args.targets:
        if lang == args.base:
            # Corrigido: f-string de linha única com aspas corretas
            print(f"Ignorando idioma de destino '{lang}' pois é o mesmo que o idioma base.")
            continue
        copy_and_prepare_translation(args.base, lang)

if __name__ == "__main__":
    main()

