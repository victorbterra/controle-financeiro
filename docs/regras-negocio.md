---

## 📘 `docs/regras-negocio.md`

```md
# 📘 Regras de Negócio — Expense Tracker

Este documento descreve as regras de negócio implementadas no sistema de organização de finanças pessoais.

---

## 🧾 1. Lançamento de Transações

- Toda transação deve ser classificada como **receita** ou **despesa**.
- Campos obrigatórios:
  - Valor (positivo e maior que zero)
  - Descrição
  - Data
  - Categoria
- Transações devem ser associadas a um usuário autenticado.

---

## 📂 2. Categorias

- Existem categorias padrão no sistema: Alimentação, Transporte, Moradia, Lazer, etc.
- O usuário pode **criar categorias customizadas**.
- Cada transação precisa de uma categoria.

---

## 💼 3. Orçamento Mensal

- O usuário pode definir um orçamento por mês (ex: R$ 3000).
- Quando as despesas ultrapassarem o orçamento, o sistema **exibe um alerta**.
- O orçamento é opcional e pode ser alterado a qualquer momento.

---

## 📈 4. Cálculo de Saldo

- Saldo do mês = Soma das receitas − Soma das despesas
- É exibido na Dashboard com destaque.
- Permite acompanhar evolução mês a mês.

---

## 🔁 5. Despesas Recorrentes

- O usuário pode marcar uma despesa como “recorrente”.
- Exemplo: aluguel, internet, academia.
- A recorrência será recriada automaticamente no mês seguinte (futuramente com opção de periodicidade).

---

## 🔐 6. Autenticação

- O sistema exige login com email e senha.
- A autenticação utiliza **JWT**.
- Todas as rotas protegidas exigem token válido.

---

## 📊 7. Relatórios

- O usuário pode visualizar:
  - Total de receitas/despesas do mês
  - Gráfico por categoria
  - Saldo geral
- Planejado: exportação de relatório mensal em PDF.

---

## 🎯 Foco

Este sistema não substitui um contador.
O foco é **facilitar o controle pessoal de finanças** com interface leve e clara.