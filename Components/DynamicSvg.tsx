import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SvgXml } from 'react-native-svg';

const DynamicSvg = ({ apiUrl }) => {
  const [svgData, setSvgData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("file://"+apiUrl)
      .then((response) => response.text()) // Ensure the API returns SVG as raw XML string
      .then((data) => {
        setSvgData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load SVG:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View>
      {svgData ? <SvgXml xml={svgData} width="100%" height="100%" /> : null}
    </View>
  );
};

export default DynamicSvg;