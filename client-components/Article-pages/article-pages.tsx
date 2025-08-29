"use client";

import { GetQueryFromObject } from "@/services/core-service/core.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

interface IArticlePagesProps {
  filter: Record<string, any>;
}

export function ArticlePages({ filter }: IArticlePagesProps) {
  const { push, query } = useRouter();
  const { data, error, isLoading } = useQuery<{ count: number }>({
    queryKey: ["articleCountKey"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles/count${GetQueryFromObject(filter)}`,
      ).then((resp) => resp.json()),
  });

  if (error) {
    return <div>oopsie daisie... {error.message}</div>;
  }

  if (isLoading) {
    return <div>načítání...</div>;
  }

  return (
    <section>
      {for let i }
    </section>
  );
}
