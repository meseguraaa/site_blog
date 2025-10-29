"use client";

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share";

import type {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export const PostShare = ({ url, title, description }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });
  return (
    <aside className="space-y-6">
      <div className="rounded-lg border-r-gray-700">
        <h2 className="hidden md:block mb-4 text-heading-xs text-gray-100">
          Compartilhar
        </h2>
        <div className="flex justify-between md:flex-col gap-2">
          {shareButtons.map(
            (provider: {
              provider: Key | null | undefined;
              action: () => void;
              icon:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactPortal
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
              name:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactPortal
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }) => (
              <Button
                key={provider.provider}
                onClick={() => provider.action()}
                variant="outline"
                className="w-fit md:w-full justify-start gap-2"
              >
                {provider.icon}
                <span className="hidden md:block">{provider.name}</span>
              </Button>
            )
          )}
        </div>
      </div>
    </aside>
  );
};
