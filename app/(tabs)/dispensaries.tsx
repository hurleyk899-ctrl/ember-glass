import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, Radius } from '@/utils/theme';

const MOCK_DISPENSARIES = [
  { id: '1', name: 'Green Leaf Collective', address: '420 Main St', city: 'Los Angeles', distance: 0.8, rating: 4.8, isOpen: true },
  { id: '2', name: 'The Cannabis Club', address: '1234 Sunset Blvd', city: 'Los Angeles', distance: 1.2, rating: 4.5, isOpen: true },
  { id: '3', name: 'Herbal Remedies', address: '888 Venice Blvd', city: 'Los Angeles', distance: 2.3, rating: 4.2, isOpen: false },
];

export default function DispensariesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nearby Dispensaries</Text>
        <TouchableOpacity style={styles.mapBtn}>
          <Ionicons name="map" size={20} color={Colors.primary} />
          <Text style={styles.mapBtnText}>Map</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_DISPENSARIES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={[styles.statusDot, { backgroundColor: item.isOpen ? Colors.success : Colors.error }]} />
            </View>
            <Text style={styles.address}>{item.address}, {item.city}</Text>
            <View style={styles.meta}>
              <View style={styles.metaItem}>
                <Ionicons name="location-outline" size={14} color={Colors.textMuted} />
                <Text style={styles.metaText}>{item.distance} mi</Text>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="star" size={14} color={Colors.accent} />
                <Text style={styles.metaText}>{item.rating}</Text>
              </View>
              <Text style={[styles.openStatus, { color: item.isOpen ? Colors.success : Colors.error }]}>
                {item.isOpen ? 'Open Now' : 'Closed'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: Spacing.md },
  title: { fontSize: FontSize.xxl, fontWeight: '800', color: Colors.text },
  mapBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: Colors.bgCard, paddingHorizontal: 12, paddingVertical: 8, borderRadius: Radius.md },
  mapBtnText: { color: Colors.primary, fontWeight: '600', fontSize: FontSize.sm },
  list: { paddingHorizontal: Spacing.md },
  card: { backgroundColor: Colors.bgCard, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.sm, borderWidth: 1, borderColor: Colors.border },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  name: { fontSize: FontSize.lg, fontWeight: '700', color: Colors.text },
  statusDot: { width: 8, height: 8, borderRadius: 4 },
  address: { fontSize: FontSize.sm, color: Colors.textSecondary, marginBottom: 10 },
  meta: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: { fontSize: FontSize.sm, color: Colors.textMuted },
  openStatus: { fontSize: FontSize.sm, fontWeight: '600', marginLeft: 'auto' },
});
