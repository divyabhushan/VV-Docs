---
id: agent-config
title: BI Hub Agent Configuration
sidebar_label: BI Hub Agent Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

## SSL Configuration

BI Hub Agents will communicate with BI Hub Server and Web via the REST API connection. For configuring these REST connections to https, kindly follow the steps below. This step is common for all the agents except BOBJ Agent. For BOBJ Agent proceed to the next section. Kindly have the proper SSL certificate from the authorized vendor in .crt format and key file. You can also have your own Self-Signed SSL certificate, but you need to make sure that certificate to a trusted certificate store by following the configuration steps provided by the particular browser which is out of scope for this document. BI Hub recommends having the proper SSL certificate from the authorized vendor.

- Open the manager.ini file in edit mode with administrative privileges. File location in `<installation location>`.
- Change the SSL property from False to True and save the file
- Copy and paste the SSL files to the SSL folder found in the `<Agent Installation Folder>/SSL`
- Rename the file `<your name>.crt` to `public.crt` and `<your name>.key` to private.key
- Restart the agent service manager by going into services.msc. The service name will be `BIHub<Agent name>SM`. For example for tableau agent the service name will be VBITableauSM
- Now the SSL has been configured successfully.
  
### SSL Configuration for BOBJ Agent

For BOBJ Agent, the SSL certificates also need to be in *`.jks`* format which is Java Key Store format apart from *`.crt`* format.

* Open the *manager.ini* file in edit mode with administrative privileges. File location in *`<installation location>`*.
* Change the SSL property from False to True and save the file
* Rename the file *`<your name>.crt`* to *public.crt* and *`<your name>.key`* to *private.key*
* Copy and paste the SSL files to the SSL folder found in the `< BOBJ Instance installation location >/SSL`
* Import the SSL Certificate and key into the Java KeyStore.
* Make sure that the Java KeyStore file generated is in the name **BOBJ_Keystore.jks**.
* Place the generated file in the SSL folder under the location `<BOBJ Instance installation location>/SSL`
* Enter the appropriate password of the generated KeyStore file in the SSL Password field in the `manager.ini` file.
This must be given after the SSL field. 
Example : `SSL Password = password` of the *keystore.jks*
* Restart the agent service manager by going into *services.msc*. The service name will be **BIHUBBOBJSM**.

:::note
SSL has been configured successfully for BOBJ Agent.
:::

## Advanced Agent Configuration

By default, the agent will be configured with the basic default configuration and the port number given during the installation process. 
If you want to change any property of the agent, you can change it by editing the `manager.ini` file. 
Open the `manager.ini` file in edit mode with administrative privileges. The file will be located in `<agent installation location>/`.
Change the required property to the desired value. Save the file and restart the agent service manager by going into `services.msc`. 
The service name will be `BIHub<Agentname>SM`. 
For example for tableau agent the service name will be BIHubTableauSM.

:::note
A new *Agent* instance must be added and each agent must be configured with the the BI Platform. These steps are covered in the <Link to={useBaseUrl('docs/admin-guide/getting-started/prerequisite/prerequisite')}>Administration Guide - pre-requisite</Link> section.
:::