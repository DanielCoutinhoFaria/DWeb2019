<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="ARQELEM">
       <xsl:result-document href="xml/arq{count(preceding-sibling::*)+1}.xml">
           <arq>
               <identi><xsl:value-of select="IDENTI"/></identi>
               <descri><xsl:value-of select="DESCRI"/></descri>
               <lugar><xsl:value-of select="LUGAR"/></lugar>
               <fregue><xsl:value-of select="FREGUE"/></fregue>
               <concel><xsl:value-of select="CONCEL"/></concel>
               <codadm><xsl:value-of select="CODADM"/></codadm>
               <latitu><xsl:value-of select="LATITU"/></latitu>
               <longit><xsl:value-of select="LONGIT"/></longit>
               <altitu><xsl:value-of select="ALTITU"/></altitu>
               <acesso><xsl:value-of select="ACESSO"/></acesso>
               <quadro><xsl:value-of select="QUADRO"/></quadro>
               <desarq><xsl:value-of select="DESARQ"/></desarq>
               <interp><xsl:value-of select="INTERP"/></interp>
               <deposi><xsl:value-of select="DEPOSI"/></deposi>
               <biblio><xsl:value-of select="BIBLIO"/></biblio>
               <autor><xsl:value-of select="AUTOR"/></autor>
               <data><xsl:value-of select="DATA"/></data>
           </arq>
       </xsl:result-document>
    </xsl:template>
</xsl:stylesheet>