import styled from 'styled-components'

export const AdminWrapper = styled.div`
  display: grid;

  max-height: 100vh;
  min-width: 100%;

  padding: 3rem;

  h1{ margin-bottom: 20px; }

  .table{
    max-height: 80vh;

    overflow-y: scroll;
  }

  table {
  display: grid;
  grid-template-columns: 1fr 1fr 125px 1fr 90px 75px 2fr;
  grid-template-rows: auto;
  border-collapse: collapse;
}

thead,
tbody,
tr {
  display: contents;

  max-height: 100%;

  overflow: scroll;
}

th,
td {
  text-overflow: ellipsis;
  white-space: nowrap;

  padding: 15px;

  overflow: hidden;
}

th {
  font-size: 1.2rem;
  text-align: left;
  font-weight: normal;
  color: white;

  position: sticky;
  top: 0;

  background: ${props => props.theme.c_blue};
}

th:last-child {
  border: 0;
}

td {
  color: #000000;

  padding-top: 10px;
  padding-bottom: 10px;
}

tr:nth-child(even) td {
  background: ${props => props.theme.c_grey};
}
`