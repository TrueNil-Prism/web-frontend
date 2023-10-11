"use client";

import Table from "@/components/table";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SECURITY_COLUMNS } from "@/data/securityData";
import { apiList, getService } from "@/utils";
import { useRouter } from "next/navigation";
import { getPaginationProps } from "@/utils/commonFn";

export default function SecurityTable() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  const itemsPerPage = 10;

  const fetchData = async () => {
    const result = await getService(
      `${apiList.securityData}&offset=${
        (currentPage - 1) * itemsPerPage
      }&limit=${itemsPerPage}`
    );
    if (result[0]?.docs) {
      setData(result[0].docs);
      setTotalCount(result[0].numFound);
    }
  };

  useEffect(() => {
    setCurrentPage(parseInt(page));
    fetchData();
  }, [currentPage]);

  const handlePaginationChange = (event, page) => {
    router.push(`?page=${page}`);
  };

  return (
    <Table
      pagination={getPaginationProps(
        totalCount,
        currentPage,
        itemsPerPage,
        handlePaginationChange
      )}
      columns={SECURITY_COLUMNS}
      data={data}
    />
  );
}
