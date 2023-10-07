"use client";

import Table from "@/components/table";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AGENT_COLUMNS } from "@/data/agentStatusData";
import { getService, apiList } from "@/utils";
import { useRouter } from "next/navigation";

export default function AgentStatus() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  const itemsPerPage = 2;

  const fetchData = async (pageCount) => {
    const result = await getService(
      `${apiList.agentStatus}?offset=${
        (pageCount - 1) * itemsPerPage
      }&limit=${itemsPerPage}`
    );
    if (result[0]?.data) {
      setData(result[0].data.list);
      setTotalCount(result[0].data.total_count);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const pageCount = parseInt(page);
    setCurrentPage(pageCount);
    fetchData(pageCount);
  }, [page]);

  const handlePaginationChange = (event, page) => {
    router.push(`?page=${page}`);
  };

  return (
    <Table
      pagination={{
        numberOfPages: Math.ceil(totalCount / itemsPerPage),
        currentPage: totalCount > 0 ? currentPage : 0,
        count: totalCount,
        itemsPerPage,
        handleChange: handlePaginationChange,
      }}
      columns={AGENT_COLUMNS}
      data={data}
      isLoading={isLoading}
    />
  );
}
