FROM directus/directus:10.12.1

USER root
RUN corepack enable
USER node

COPY extensions /directus/extensions

RUN pnpm install directus-extension-generate-types@0.6.0
RUN pnpm install directus-extension-sync@1.1.6