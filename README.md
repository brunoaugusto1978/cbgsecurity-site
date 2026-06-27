# CBG Security — GitHub Pages

Landing page estática para `cbgsecurity.com.br`.

## Arquivos principais

- `index.html` — página principal
- `style.css` — identidade visual e layout responsivo
- `script.js` — menu mobile, ano no rodapé e animações leves
- `CNAME` — domínio customizado do GitHub Pages
- `assets/` — logo, capa, favicon e imagens sociais

## Publicar no GitHub Pages

```bash
git init
git add .
git commit -m "feat: add CBG Security landing page"
gh repo create cbgsecurity-site --public --source=. --remote=origin --push
```

Depois, no GitHub:

1. Acesse o repositório.
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Branch: `main` / folder: `/root`.
5. Confirme o domínio customizado: `cbgsecurity.com.br`.
6. Ative **Enforce HTTPS** quando o certificado estiver disponível.

## DNS sugerido

Para o domínio raiz `cbgsecurity.com.br`:

```text
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
```

Para `www.cbgsecurity.com.br`:

```text
CNAME www brunoaugusto1978.github.io
```

Se preferir usar `www.cbgsecurity.com.br` como domínio principal, altere o conteúdo do arquivo `CNAME` para:

```text
www.cbgsecurity.com.br
```

## Perfis usados

- LinkedIn pessoal: https://www.linkedin.com/in/bruno-augusto-lobo-soares/
- LinkedIn CBG: https://www.linkedin.com/company/cbgsecurity/
- GitHub: https://github.com/brunoaugusto1978
