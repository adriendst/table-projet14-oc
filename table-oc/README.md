Composant adpaté du plugin jquery de la table du projet 14 de la formation Développeur Javascript/React d'Openclassrooms.

Version de Node : v20.12.2
IDE : VSCode
Version de React : 19.0.0
Version de TypeScript : 5.8.2

Etape d'installation : 

npm i table-oc 
OU
yarn i table-oc

Utilisé le composant dans votre projet :

import { Table } from "table-oc";
import 'table-oc/dist/table-oc.css'

    <Table data={data} columns={columns} />


Structure des props : 
data: any[]
columns: Record<string, string>

Dans l'objet columns, la clé correspond a la clé de la valeur que l'on veut afficher dans l'objet data. La valeur de l'objet column correspond au nom de la colonne qui sera affiché.

Exemple de données de props : 
const columns = {
        firstName: "First Name",
        lastName: "Last Name",
        startDate: "Start Date",
        department: "Department",
        birthDate: "Date of Birth",
        street: "Street",
        city: "City",
        state: "State",
        zipCode: "Zip Code",
    };

const data = [
    {
        firstName: "John",
        lastName: "Doe",
        startDate: "2020-07-21",
        department: "Engineering",
        birthDate: "1990-01-15",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
    }
]


Fonctionnalités du composant :
- Recherche sur toutes les données du tableau
- Changement du nombre de données à affichés sur une page du tableau
- Pagination
- Trie ascendant/descendant sur une colonne