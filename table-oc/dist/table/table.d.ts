export type TableFilter = {
    column: string;
    filter: string;
};
/**
 * Le composant permet d'afficher des données dans une table.
 * Les données peuvent être filtrées avec un input de recherche.
 * La table est munie d'une pagination ainsi que d'un selecteur pour choisir le nombre de données à afficher sur une seule page.
 */
declare const Table: ({ data, columns }: {
    data: any[];
    columns: Record<string, string>;
}) => import("react/jsx-runtime").JSX.Element;
export default Table;
