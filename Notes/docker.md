RUN <command> allows you to execute any command as you would at a command prompt, for example installing different application packages or running a build command. The results of the RUN are persisted to the image so it's important not to leave any unnecessary or temporary files on the disk as these will be included in the image.

COPY <src> <dest> allows you to copy files from the directory containing the Dockerfile to the container's image. This is extremely useful for source code and assets that you want to be deployed inside your container.

Using the EXPOSE <port> command you tell Docker which ports should be open and can be bound to. You can define multiple ports on the single command, for example, EXPOSE 80 433 or EXPOSE 7000-8000

An alternative approach to CMD is ENTRYPOINT. While a CMD can be overridden when the container starts, a ENTRYPOINT defines a command which can have arguments passed to it when the container launches.

In this example, NGINX would be the entrypoint with -g daemon off; the default command.