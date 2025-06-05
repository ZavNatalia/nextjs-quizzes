'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Code, Text } from '@chakra-ui/react';

export default function Markdown({ children }: { children: string }) {
    return (
        <ReactMarkdown
            components={{
                p: (props) => <Text {...props} />,
                strong: (props) => <Text as="strong" fontWeight="bold" {...props} />,
                em: (props) => <Text as="em" fontStyle="italic" {...props} />,
                code: ({ children }) => (
                    <Code fontSize="sm" borderRadius="md" color="code" bg="codeBg" px={1}>
                        {children}
                    </Code>
                ),
            }}
        >
            {children}
        </ReactMarkdown>
    );
}
