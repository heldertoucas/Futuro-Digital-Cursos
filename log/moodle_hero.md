# Código Hero "Futuro Digital" para Moodle

Este código replica a secção principal (Hero) do site **Futuro Digital**, adaptado para ser inserido num recurso "Rótulo" (Label) ou "Página" do Moodle.

**Características:**
*   Layout flexível (Texto à esquerda, Imagem à direita).
*   Totalmente responsivo (empilha verticalmente em telemóveis).
*   Usa as cores e estilos exatos do projeto (`#5271FF` para o botão, `#151515` para títulos).
*   CSS isolado com prefixo `fd-` para não estragar o resto do tema do Moodle.

---

### Como aplicar no Moodle:
1.  Ative o **"Modo de Edição"** no seu curso.
2.  Adicione uma atividade/recurso do tipo **"Área de texto e multimédia"** (Rótulo).
3.  Na barra de ferramentas do editor, clique no botão **"Editar código HTML"** (ícone `< >` ou `HTML`).
4.  Cole o código abaixo.
5.  Clique em "Guardar".

---

### Código para Copiar:

```html
<!-- INICIO HERO FUTURO DIGITAL (MOODLE) -->
<style>
    /* Scoped CSS para evitar conflitos com o tema do Moodle */
    .fd-hero-wrapper {
        font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: #ffffff;
        padding: 60px 20px;
        width: 100%;
        box-sizing: border-box;
        line-height: 1.5;
    }

    .fd-hero-container {
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: space-between;
    }

    /* Texto */
    .fd-hero-text {
        flex: 1;
        min-width: 300px; /* Evita esmagamento */
    }

    .fd-hero-title {
        font-size: 2.8rem !important; /* Força tamanho sobre o Moodle */
        font-weight: 800 !important;
        color: #151515 !important;
        margin-bottom: 20px !important;
        line-height: 1.1 !important;
        margin-top: 0 !important;
    }

    .fd-hero-subtitle {
        font-size: 1.2rem !important;
        color: #575757 !important;
        margin-bottom: 30px !important;
        font-weight: 400 !important;
    }

    /* Botão */
    .fd-hero-btn {
        display: inline-block;
        padding: 12px 28px;
        background-color: #5271FF;
        color: #ffffff !important;
        text-decoration: none !important;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 50px;
        border: 1px solid transparent;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(82, 113, 255, 0.2);
    }

    .fd-hero-btn:hover {
        background-color: #3a5de0;
        transform: translateY(-2px);
        color: #ffffff !important;
        box-shadow: 0 6px 12px rgba(82, 113, 255, 0.3);
    }

    /* Imagem */
    .fd-hero-image-wrapper {
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .fd-hero-img {
        max-width: 100%;
        height: auto;
        max-height: 400px; /* Limite de altura para não dominar o ecrã */
        object-fit: contain;
    }

    /* Responsividade (Mobile) */
    @media (max-width: 992px) {
        .fd-hero-container {
            flex-direction: column-reverse; /* Imagem em cima ou em baixo conforme preferência. Aqui texto em baixo. */
            text-align: center;
            gap: 30px;
        }
        
        .fd-hero-container {
            flex-direction: column; /* Imagem em baixo do texto em mobile */
        }

        .fd-hero-title {
            font-size: 2.2rem !important;
        }

        .fd-hero-text {
            width: 100%;
        }
        
        .fd-hero-image-wrapper {
            width: 100%;
        }
    }
</style>

<div class="fd-hero-wrapper">
    <div class="fd-hero-container">
        <!-- Coluna Esquerda: Texto -->
        <div class="fd-hero-text">
            <h1 class="fd-hero-title">A sua jornada de capacitação digital começa aqui.</h1>
            <p class="fd-hero-subtitle">
                Conheça os cursos do programa Futuro Digital e transforme a forma como trabalha em equipa na CMLisboa com as ferramentas Microsoft.
            </p>
            <!-- Link do Botão: Substitua '#lista-de-cursos' pelo link da secção do Moodle ou URL desejado -->
            <a href="#lista-de-cursos" class="fd-hero-btn">Explorar Cursos</a>
        </div>

        <!-- Coluna Direita: Imagem -->
        <div class="fd-hero-image-wrapper">
            <!-- Imagem original do site Futuro Digital -->
            <img src="https://i.imgur.com/ZJvakeb.png" alt="Ilustração Futuro Digital" class="fd-hero-img">
        </div>
    </div>
</div>
<!-- FIM HERO FUTURO DIGITAL -->
```