import React, { useState } from 'react';
import {
  View, Text, TextInput, FlatList, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, Radius } from '@/utils/theme';

const STRAIN_TYPES = ['All', 'Indica', 'Sativa', 'Hybrid'] as const;

// Placeholder strains until API is connected
const MOCK_STRAINS = [
  { id: '1', name: 'Blue Dream', type: 'Hybrid', thc: 21, cbd: 0.1, effects: ['Relaxed', 'Happy', 'Creative'], flavors: ['Berry', 'Sweet'] },
  { id: '2', name: 'OG Kush', type: 'Indica', thc: 23, cbd: 0.3, effects: ['Sleepy', 'Relaxed', 'Hungry'], flavors: ['Earthy', 'Pine'] },
  { id: '3', name: 'Sour Diesel', type: 'Sativa', thc: 22, cbd: 0.2, effects: ['Energetic', 'Focused', 'Happy'], flavors: ['Diesel', 'Citrus'] },
  { id: '4', name: 'Gelato', type: 'Hybrid', thc: 25, cbd: 0.1, effects: ['Happy', 'Relaxed', 'Euphoric'], flavors: ['Sweet', 'Fruity'] },
];

const typeColor = (type: string) => {
  if (type === 'Indica') return Colors.indica;
  if (type === 'Sativa') return Colors.sativa;
  return Colors.hybrid;
};

export default function ExploreScreen() {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<typeof STRAIN_TYPES[number]>('All');

  const filtered = MOCK_STRAINS.filter((s) => {
    const matchType = activeType === 'All' || s.type === activeType;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌿 Ember Glass</Text>
        <Text style={styles.subtitle}>Discover your perfect strain</Text>
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <Ionicons name="search" size={18} color={Colors.textMuted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search strains..."
          placeholderTextColor={Colors.textMuted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filters */}
      <View style={styles.filterRow}>
        {STRAIN_TYPES.map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.filterChip, activeType === type && styles.filterChipActive]}
            onPress={() => setActiveType(type)}
          >
            <Text style={[styles.filterText, activeType === type && styles.filterTextActive]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Strain List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.strainName}>{item.name}</Text>
              <View style={[styles.typeBadge, { backgroundColor: typeColor(item.type) + '22' }]}>
                <Text style={[styles.typeText, { color: typeColor(item.type) }]}>{item.type}</Text>
              </View>
            </View>
            <View style={styles.thcRow}>
              <Text style={styles.thcLabel}>THC <Text style={styles.thcValue}>{item.thc}%</Text></Text>
              <Text style={styles.thcLabel}>CBD <Text style={styles.thcValue}>{item.cbd}%</Text></Text>
            </View>
            <View style={styles.tagsRow}>
              {item.effects.slice(0, 3).map((e) => (
                <View key={e} style={styles.tag}>
                  <Text style={styles.tagText}>{e}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  header: { paddingHorizontal: Spacing.md, paddingTop: Spacing.md, paddingBottom: Spacing.sm },
  logo: { fontSize: FontSize.xxl, fontWeight: '800', color: Colors.text },
  subtitle: { fontSize: FontSize.sm, color: Colors.textSecondary, marginTop: 2 },
  searchRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.bgCard, borderRadius: Radius.md,
    marginHorizontal: Spacing.md, marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  searchIcon: { marginRight: Spacing.sm },
  searchInput: { flex: 1, height: 44, color: Colors.text, fontSize: FontSize.md },
  filterRow: { flexDirection: 'row', paddingHorizontal: Spacing.md, marginBottom: Spacing.sm, gap: 8 },
  filterChip: {
    paddingHorizontal: 14, paddingVertical: 7,
    borderRadius: Radius.full, backgroundColor: Colors.bgCard,
    borderWidth: 1, borderColor: Colors.border,
  },
  filterChipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  filterText: { fontSize: FontSize.sm, color: Colors.textSecondary, fontWeight: '600' },
  filterTextActive: { color: Colors.text },
  list: { paddingHorizontal: Spacing.md, paddingBottom: Spacing.xl },
  card: {
    backgroundColor: Colors.bgCard, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 1, borderColor: Colors.border,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  strainName: { fontSize: FontSize.lg, fontWeight: '700', color: Colors.text },
  typeBadge: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: Radius.full },
  typeText: { fontSize: FontSize.xs, fontWeight: '700', textTransform: 'uppercase' },
  thcRow: { flexDirection: 'row', gap: 16, marginBottom: 10 },
  thcLabel: { fontSize: FontSize.sm, color: Colors.textSecondary },
  thcValue: { color: Colors.primary, fontWeight: '700' },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  tag: { backgroundColor: Colors.bgElevated, paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  tagText: { fontSize: FontSize.xs, color: Colors.textSecondary },
});
