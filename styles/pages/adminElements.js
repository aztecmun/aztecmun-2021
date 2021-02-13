import styled from 'styled-components'

export const AdminWrapper = styled.div`
  color: ${props => props.theme.text};

  display: grid;

  min-height: 100vh;
  width: 100%;

  padding: 120px 60px;

  background: ${props => props.theme.body_bg2};

  table {
  display: grid;
  grid-template-columns: 
    minmax(150px, 1fr)
    minmax(150px, 2fr)
    minmax(150px, 2fr)
    minmax(150px, .5fr)
    minmax(150px, .5fr)
    minmax(150px, 1.5fr)
    minmax(150px, .5fr)
    minmax(150px, 2fr);
    grid-template-rows: auto;
  border-collapse: collapse;

  min-width: 100%;
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

  background: ${props => props.theme.blue};
}

th:last-child {
  border: 0;
}

td {
  color: #808080;

  padding-top: 10px;
  padding-bottom: 10px;
}

tr:nth-child(even) td {
  background: ${props => props.theme.text};
}
`