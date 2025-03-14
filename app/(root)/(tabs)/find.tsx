import React, { useState } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Button, Searchbar } from 'react-native-paper';

import images from '@/constants/images';
import { StoreCard } from '@/components/StoreCard';

export default function Find() {
	return <StoreCard />;
}
