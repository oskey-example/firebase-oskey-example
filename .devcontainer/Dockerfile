FROM gpfister/firebase-devenv:develop

# Switch back to root
USER root
COPY nginx.conf /etc/nginx/nginx.conf
RUN apt-get update && \
    apt-get install -y -o DPkg::Options::=--force-confdef nginx && \
    if [ ! -d /run/nginx ]; then mkdir -p /run/nginx; fi && \
    if [ ! -d /var/lig/nginx ]; then mkdir -p /var/lig/nginx; fi && \
    if [ ! -d /var/log/nginx ]; then mkdir -p /var/log/nginx; fi && \
    chown -R vscode: /run/nginx && \
    chown -R vscode: /var/lib/nginx && \
    chown -R vscode: /var/log/nginx && \
    unlink /etc/nginx/sites-enabled/default
COPY reverse-proxy.conf /etc/nginx/sites-available/reverse-proxy.conf
RUN ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf

# Switch back to vscode user
USER vscode

# Set worksapce
WORKDIR /workspace

# Trust workspace
RUN git config --global --add safe.directory /workspace

# Expose ports
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19003
EXPOSE 19004
EXPOSE 19005
EXPOSE 19006

CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]