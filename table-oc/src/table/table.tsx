import React, { useEffect, useMemo, useState } from "react";
import "./table.css";
import Pagination from "./pagination/pagination";

export type TableFilter = {
    column: string;
    filter: string;
};

/**
 * Le composant permet d'afficher des données dans une table.
 * Les données peuvent être filtrées avec un input de recherche.
 * La table est munie d'une pagination ainsi que d'un selecteur pour choisir le nombre de données à afficher sur une seule page.
 */
const Table = ({ data, columns }: { data: any[]; columns: Record<string, string> }) => {
    const [dataTable, setDataTable] = useState<any[]>(data);

    // valeur de la recherche qui filtera les données
    const [search, setSearch] = useState("");
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        //lorsque l'on cherche une donnée, on reset la pagination à 1
        setPagination(1);
    };

    //valuer correspondant au nombre de données affichées par page
    const [rowPerPage, setRowPerPage] = useState("10");
    const handleRowPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowPerPage(e.target.value);
        setPagination(1);
    };

    // numéro de la pagination
    const [pagination, setPagination] = useState(1);

    //données filtrées en foncion de la valeur de recherche
    const searchedRow = useMemo(() => {
        return dataTable.filter((data) =>
            Object.values(data).some((value) => String(value).toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, dataTable]);

    // range des index des données affichées
    const [rangeDataNumber, setRangeDataNumber] = useState<number[]>([0, 0]);

    //lorsque le nombre de ligne par page ou la pagination change, on reset la range des index des données affichées
    useEffect(() => {
        const rowPerPageValue = Number(rowPerPage);
        const paginationValue = pagination;
        setRangeDataNumber([rowPerPageValue * paginationValue - rowPerPageValue, rowPerPageValue * paginationValue]);
    }, [rowPerPage, pagination]);

    //lorsque les données filtrés par la recherche ou la range des index des données affichés change on redéfini les données affichés
    const paginatedRows = useMemo(() => {
        return searchedRow.slice(rangeDataNumber[0], rangeDataNumber[1]);
    }, [searchedRow, rangeDataNumber]);

    //permet de trier en asc/desc les données sur une colonne
    const [filter, setFilter] = useState<TableFilter>({ column: "", filter: "" });

    //on créer les lignes de la table qui vont être affichés
    const rows = useMemo(() => {
        return paginatedRows.map((d, index) => (
            <tr key={index}>
                {Object.entries(columns).map((c, index) => {
                    return (
                        <td key={index} className={filter.column === c[0] ? "onFilterColumn" : ""}>
                            {d[c[0]]}
                        </td>
                    );
                })}
            </tr>
        ));
    }, [paginatedRows, filter]);

    //nombre total de page
    const [pageNumber, setPageNumber] = useState(0);

    //calcul du nombre total de page
    useEffect(() => {
        setPageNumber(Math.ceil(searchedRow.length / Number(rowPerPage)));
    }, [searchedRow, rowPerPage]);

    //fonction qui set le filtre asc/desc sur une colonne
    const setFiltering = (column: string) => {
        if (filter.column !== column) setFilter({ column: column, filter: "asc" });
        else if (filter.filter === "asc") setFilter({ column: column, filter: "desc" });
        else if (filter.filter === "desc") setFilter({ column: "", filter: "" });
    };

    //trie les données en fonction du filtre sur les colonnes
    useEffect(() => {
        if (filter.filter === "asc" || filter.filter === "desc") {
            const sorted = [...data].sort((a, b) => {
                let valA = a[filter.column];
                let valB = b[filter.column];

                let result;
                if (typeof valA === "string") {
                    result = valA.localeCompare(valB);
                } else {
                    result = valA - valB;
                }

                return filter.filter === "asc" ? result : -result;
            });

            setDataTable(sorted);
        } else {
            setDataTable(data);
        }
    }, [filter, data]);

    return (
        <div className="table">
            <div className="tableBar">
                <div className="tableBarSection">
                    <span>Show</span>
                    <select value={rowPerPage} onChange={handleRowPerPageChange}>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <span>entries</span>
                </div>
                <div className="tableBarSection">
                    <span>Search : </span>
                    <div className="input">
                        <input type="text" value={search} onChange={handleSearchChange} />
                        {search !== "" && (
                            <p
                                onClick={() => {
                                    const fakeEvent = {
                                        target: { value: "" },
                                    } as React.ChangeEvent<HTMLInputElement>;
                                    handleSearchChange(fakeEvent);
                                }}
                            >
                                ✕
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="tableContainer">
                <table>
                    <thead>
                        <tr>
                            {Object.entries(columns).map((c, index) => {
                                return (
                                    <th key={index} onClick={() => setFiltering(c[0])}>
                                        <div className="header">
                                            <span className="headerName">{c[1]}</span>
                                            <span className="arrows">
                                                <div
                                                    className={
                                                        filter.column === c[0] && filter.filter === "asc"
                                                            ? "filterActive"
                                                            : ""
                                                    }
                                                >
                                                    ▲
                                                </div>
                                                <div
                                                    className={
                                                        filter.column === c[0] && filter.filter === "desc"
                                                            ? "filterActive"
                                                            : ""
                                                    }
                                                >
                                                    ▼
                                                </div>
                                            </span>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={100} className="emptyDataMessage">
                                    No data available in table
                                </td>
                            </tr>
                        ) : searchedRow.length === 0 ? (
                            <tr>
                                <td colSpan={100} className="emptyDataMessage">
                                    No matching records found
                                </td>
                            </tr>
                        ) : (
                            rows
                        )}
                    </tbody>
                </table>
            </div>
            <div className="tableBar">
                <div className="tableBarSection">
                    <span>
                        Showing {data.length === 0 || searchedRow.length === 0 ? 0 : rangeDataNumber[0] + 1} to{" "}
                        {search !== ""
                            ? Number(rowPerPage) * pagination > searchedRow.length
                                ? searchedRow.length
                                : Number(rowPerPage) * pagination
                            : Number(rowPerPage) * pagination > dataTable.length
                            ? dataTable.length
                            : Number(rowPerPage) * pagination}{" "}
                        of{" "}
                        {search !== ""
                            ? `${searchedRow.length} entries (filtered from ${dataTable.length} total entries)`
                            : `${dataTable.length} entries`}
                    </span>
                </div>
                <div className="tableBarSection">
                    <Pagination pageNumber={pageNumber} pagination={pagination} setPagination={setPagination} />
                </div>
            </div>
        </div>
    );
};

export default Table;
