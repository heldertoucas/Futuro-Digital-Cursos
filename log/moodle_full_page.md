
# Código da Página Principal "Futuro Digital" para Moodle (Versão Completa Inline CSS)

Este código contém toda a estrutura da página inicial (Hero, Acesso Rápido, Cursos, Sobre e Testemunhos), formatada especificamente para não ser bloqueada pelos filtros de segurança do Moodle.

**Instruções:**
1.  No Moodle, ative o **"Modo de Edição"**.
2.  Adicione ou edite um **Rótulo** (Área de texto e multimédia).
3.  Clique no botão **HTML** (`< >`).
4.  **Apague tudo** e cole o código abaixo.

---

### Código HTML Completo

```html
<!-- WRAPPER GERAL -->
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #575757; background-color: #ffffff; width: 100%; box-sizing: border-box; line-height: 1.6;">

    <!-- HEADER (Logótipo Centrado) -->
    <div style="padding: 40px 0 20px 0; background-color: #fff; text-align: center;">
        <div style="max-width: 1140px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: center;">
            <img src="https://i.imgur.com/L7wNgqt.png" alt="Logo Futuro Digital" style="height: 80px; width: auto; display: block;">
        </div>
    </div>

    <!-- HERO SECTION -->
    <div style="padding: 60px 0; background-color: #ffffff;">
        <div style="max-width: 1140px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; gap: 50px; flex-wrap: wrap;">
            <!-- Texto Hero -->
            <div style="flex: 1 1 400px; min-width: 300px;">
                <h1 style="font-size: 2.5rem; font-weight: 800; color: #151515; line-height: 1.2; margin-top: 0; margin-bottom: 20px;">
                    A sua jornada de capacitação digital começa aqui.
                </h1>
                <p style="font-size: 1.1rem; color: #575757; margin-bottom: 30px;">
                    Conheça os cursos do programa Futuro Digital e transforme a forma como trabalha em equipa na CMLisboa com as ferramentas Microsoft.
                </p>
                <!-- BOTÃO HERO (Verde #35B729) -->
                <a href="#lista-cursos" style="display: inline-block; padding: 12px 30px; background-color: #35B729; color: #ffffff; text-decoration: none; font-size: 1rem; font-weight: 600; border-radius: 50px; box-shadow: 0 4px 10px rgba(53, 183, 41, 0.3);">
                    Explorar Cursos
                </a>
            </div>
            <!-- Imagem Hero -->
            <div style="flex: 1 1 400px; min-width: 300px; text-align: center;">
                <img src="https://i.imgur.com/IvxXJns.png" alt="Ilustração Digital" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>

    <!-- SECÇÃO DE ACESSO RÁPIDO (Botões Azuis #5271FF) -->
    <div style="padding: 40px 0; background-color: #ffffff;">
        <div style="max-width: 1140px; margin: 0 auto; padding: 0 20px;">
            <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                <a href="https://formacao.cm-lisboa.pt/mod/forum/view.php?id=4543" target="_blank" style="flex: 1 1 250px; text-decoration: none; background-color: #5271FF; color: #ffffff; border-radius: 50px; padding: 15px 20px; text-align: center; font-weight: 700; box-shadow: 0 4px 10px rgba(82, 113, 255, 0.3); display: flex; align-items: center; justify-content: center; gap: 10px; min-width: 200px;">
                    📢 Consulte os anúncios
                </a>
                <a href="https://formacao.cm-lisboa.pt/mod/forum/view.php?id=4548" target="_blank" style="flex: 1 1 250px; text-decoration: none; background-color: #5271FF; color: #ffffff; border-radius: 50px; padding: 15px 20px; text-align: center; font-weight: 700; box-shadow: 0 4px 10px rgba(82, 113, 255, 0.3); display: flex; align-items: center; justify-content: center; gap: 10px; min-width: 200px;">
                    💬 Interaja no fórum
                </a>
                <a href="https://formacao.cm-lisboa.pt/mod/attendance/view.php?id=4547" target="_blank" style="flex: 1 1 250px; text-decoration: none; background-color: #5271FF; color: #ffffff; border-radius: 50px; padding: 15px 20px; text-align: center; font-weight: 700; box-shadow: 0 4px 10px rgba(82, 113, 255, 0.3); display: flex; align-items: center; justify-content: center; gap: 10px; min-width: 200px;">
                    ✅ Registe a sua presença
                </a>
            </div>
        </div>
    </div>

    <!-- CURSOS SECTION -->
    <div id="lista-cursos" style="padding: 60px 0; background-color: #ffffff;">
        <div style="max-width: 1140px; margin: 0 auto; padding: 0 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="font-size: 2rem; font-weight: 700; color: #151515; margin-bottom: 15px; margin-top: 0;">
                    Cursos Disponíveis
                </h2>
                <p style="max-width: 700px; margin: 0 auto; font-size: 1rem;">
                    Formações práticas e focadas nas ferramentas que potenciam a colaboração e produtividade da sua equipa no dia a dia.
                </p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <!-- Curso 1: Word -->
                <div style="background: white; border-radius: 8px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="height: 140px; background-image: url('https://i.imgur.com/HODzPjK.png'); background-size: cover; background-position: center;"></div>
                    <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                        <span style="display: inline-block; padding: 3px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 10px; background-color: #5271FF; width: fit-content;">Trabalhar em equipa</span>
                        <h3 style="font-size: 1.1rem; font-weight: 700; color: #151515; margin: 0 0 8px 0;">Microsoft Word</h3>
                        <p style="font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; line-height: 1.4;">Formalize e comunique a estratégia. Domine a coautoria e a formatação profissional.</p>
                        <a href="https://heldertoucas.github.io/Futuro-Digital-Cursos/word.html" target="_blank" style="display: block; width: 100%; padding: 8px 0; text-align: center; background-color: #f9f9f9; color: #151515; text-decoration: none; font-weight: 600; border-radius: 4px; border: 1px solid #e0e0e0; font-size: 0.9rem;">Saber mais</a>
                    </div>
                </div>
                <!-- Curso 2: Loop e Planner -->
                <div style="background: white; border-radius: 8px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="height: 140px; background-image: url('https://i.imgur.com/cGGkuOH.png'); background-size: cover; background-position: center;"></div>
                    <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                        <span style="display: inline-block; padding: 3px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 10px; background-color: #44D9E6; width: fit-content;">Trabalhar em equipa</span>
                        <h3 style="font-size: 1.1rem; font-weight: 700; color: #151515; margin: 0 0 8px 0;">Microsoft Loop e Planner</h3>
                        <p style="font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; line-height: 1.4;">A sua sala de projeto digital. Co-crie ideias no Loop e transforme-as em planos de ação.</p>
                        <a href="https://heldertoucas.github.io/Futuro-Digital-Cursos/loopplanner.html" target="_blank" style="display: block; width: 100%; padding: 8px 0; text-align: center; background-color: #f9f9f9; color: #151515; text-decoration: none; font-weight: 600; border-radius: 4px; border: 1px solid #e0e0e0; font-size: 0.9rem;">Saber mais</a>
                    </div>
                </div>
                <!-- Curso 3: Excel e Forms -->
                <div style="background: white; border-radius: 8px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="height: 140px; background-image: url('https://i.imgur.com/T4rwgD6.png'); background-size: cover; background-position: center;"></div>
                    <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                        <span style="display: inline-block; padding: 3px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 10px; background-color: #35B729; width: fit-content;">Trabalhar em equipa</span>
                        <h3 style="font-size: 1.1rem; font-weight: 700; color: #151515; margin: 0 0 8px 0;">Microsoft Excel e Forms</h3>
                        <p style="font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; line-height: 1.4;">Analise dados de forma eficiente e crie inquéritos e formulários inteligentes.</p>
                        <a href="https://heldertoucas.github.io/Futuro-Digital-Cursos/excelforms.html" target="_blank" style="display: block; width: 100%; padding: 8px 0; text-align: center; background-color: #f9f9f9; color: #151515; text-decoration: none; font-weight: 600; border-radius: 4px; border: 1px solid #e0e0e0; font-size: 0.9rem;">Saber mais</a>
                    </div>
                </div>
                <!-- Curso 4: Teams e SharePoint -->
                <div style="background: white; border-radius: 8px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="height: 140px; background-image: url('https://i.imgur.com/d0U1UmD.png'); background-size: cover; background-position: center;"></div>
                    <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                        <span style="display: inline-block; padding: 3px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 10px; background-color: #933EC5; width: fit-content;">Trabalhar em equipa</span>
                        <h3 style="font-size: 1.1rem; font-weight: 700; color: #151515; margin: 0 0 8px 0;">Microsoft Teams e SharePoint</h3>
                        <p style="font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; line-height: 1.4;">Centralize a comunicação e os ficheiros da sua equipa num hub colaborativo.</p>
                        <a href="https://heldertoucas.github.io/Futuro-Digital-Cursos/teamssharepoint.html" target="_blank" style="display: block; width: 100%; padding: 8px 0; text-align: center; background-color: #f9f9f9; color: #151515; text-decoration: none; font-weight: 600; border-radius: 4px; border: 1px solid #e0e0e0; font-size: 0.9rem;">Saber mais</a>
                    </div>
                </div>
                <!-- Curso 5: Copilot -->
                <div style="background: white; border-radius: 8px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="height: 140px; background-image: url('https://i.imgur.com/cPX9LRp.png'); background-size: cover; background-position: center;"></div>
                    <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                        <span style="display: inline-block; padding: 3px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 10px; background-color: #FF4D00; width: fit-content;">Trabalhar em equipa</span>
                        <h3 style="font-size: 1.1rem; font-weight: 700; color: #151515; margin: 0 0 8px 0;">Inteligência Artificial Copilot</h3>
                        <p style="font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; line-height: 1.4;">Descubra como a IA pode ser a sua assistente pessoal para acelerar tarefas.</p>
                        <a href="https://heldertoucas.github.io/Futuro-Digital-Cursos/copilot.html" target="_blank" style="display: block; width: 100%; padding: 8px 0; text-align: center; background-color: #f9f9f9; color: #151515; text-decoration: none; font-weight: 600; border-radius: 4px; border: 1px solid #e0e0e0; font-size: 0.9rem;">Saber mais</a>
                    </div>
                </div>
                <!-- Curso 6: Google Forms -->
                <div style="background: white; border-radius: 8px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="height: 140px; background-image: url('https://i.imgur.com/mzOGX3n.png'); background-size: cover; background-position: center;"></div>
                    <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                        <span style="display: inline-block; padding: 3px 10px; border-radius: 15px; font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 10px; background-color: #1b1b1b; width: fit-content;">Trabalhar em equipa</span>
                        <h3 style="font-size: 1.1rem; font-weight: 700; color: #151515; margin: 0 0 8px 0;">Google Forms</h3>
                        <p style="font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; line-height: 1.4;">Aprenda a criar inquéritos, gerir inscrições em eventos e recolher feedback.</p>
                        <a href="https://heldertoucas.github.io/Futuro-Digital-Cursos/googleforms.html" target="_blank" style="display: block; width: 100%; padding: 8px 0; text-align: center; background-color: #f9f9f9; color: #151515; text-decoration: none; font-weight: 600; border-radius: 4px; border: 1px solid #e0e0e0; font-size: 0.9rem;">Saber mais</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SECÇÃO SOBRE O PROGRAMA -->
    <div style="padding: 60px 0; background-color: #ffffff;">
        <div style="max-width: 1140px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; gap: 50px; flex-wrap: wrap;">
            <!-- Imagem Circular -->
            <div style="flex: 1 1 400px; min-width: 300px; display: flex; justify-content: center;">
                <img src="https://i.imgur.com/9U2GzTP.png" alt="Equipa Futuro Digital" style="max-width: 100%; height: auto; border-radius: 50%;">
            </div>
            <!-- Texto -->
            <div style="flex: 1 1 400px; min-width: 300px;">
                <h2 style="font-size: 2rem; font-weight: 700; color: #151515; margin-bottom: 15px; margin-top: 0;">Sobre o Programa Futuro Digital</h2>
                <p style="font-size: 1.1rem; color: #575757; margin-bottom: 25px; line-height: 1.6;">
                    O Programa para a Inclusão e Literacia Digital da Câmara Municipal de Lisboa tem como missão capacitar os seus colaboradores e todos os cidadãos com as competências digitais essenciais para os desafios do presente e do futuro.
                </p>
                <a href="https://lisbon.cityoflearning.eu/pt/activities/21650" target="_blank" style="display: inline-block; padding: 12px 30px; background-color: #5271FF; color: #ffffff; text-decoration: none; font-size: 1rem; font-weight: 600; border-radius: 50px; box-shadow: 0 4px 10px rgba(82, 113, 255, 0.3);">
                    Conheça a iniciativa
                </a>
            </div>
        </div>
    </div>

    <!-- SECÇÃO TESTEMUNHOS (Grelha Estática para Moodle) -->
    <div style="padding: 60px 0; background-color: #f9f9f9;">
        <div style="max-width: 1140px; margin: 0 auto; padding: 0 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="font-size: 2rem; font-weight: 700; color: #151515; margin-bottom: 10px; margin-top: 0;">O Que Dizem os Nossos Formandos</h2>
                <p style="font-size: 1rem; color: #575757;">Testemunhos reais de participantes que melhoraram a sua forma de trabalhar.</p>
            </div>
            
            <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                <!-- Testemunho 1 -->
                <div style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); flex: 1 1 300px; text-align: center; min-width: 280px;">
                    <div style="color: #f39c12; font-size: 1.2rem; margin-bottom: 15px;">★★★★★</div>
                    <p style="font-style: italic; color: #575757; margin-bottom: 15px;">"Excelente formação, muito bem estruturada e organizada. Conteúdos muito interessantes e relevantes. Recomendo vivamente!"</p>
                    <p style="font-weight: 700; color: #151515;">- Andreia F.</p>
                </div>
                
                <!-- Testemunho 2 -->
                <div style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); flex: 1 1 300px; text-align: center; min-width: 280px;">
                    <div style="color: #f39c12; font-size: 1.2rem; margin-bottom: 15px;">★★★★★</div>
                    <p style="font-style: italic; color: #575757; margin-bottom: 15px;">"Uma formação muito útil, dinâmica e com dois formadores sempre disponíveis. Adorei! Recomendo."</p>
                    <p style="font-weight: 700; color: #151515;">- Margarida F.</p>
                </div>

                <!-- Testemunho 3 -->
                <div style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); flex: 1 1 300px; text-align: center; min-width: 280px;">
                    <div style="color: #f39c12; font-size: 1.2rem; margin-bottom: 15px;">★★★★★</div>
                    <p style="font-style: italic; color: #575757; margin-bottom: 15px;">"Curso muito bem conseguido. Os formadores foram excelentes, muito conhecedores da matéria e claros na exposição."</p>
                    <p style="font-weight: 700; color: #151515;">- Cristina M.</p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 40px;">
                <a href="https://search.google.com/local/reviews?placeid=ChIJqzdZTp8zGQ0RyunbKZ1N7Qo" target="_blank" style="color: #5271FF; text-decoration: none; border-bottom: 1px solid #5271FF; padding-bottom: 2px;">Ver mais avaliações no Google</a>
            </div>
        </div>
    </div>

</div>
<!-- FIM WRAPPER -->
```
